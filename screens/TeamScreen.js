import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebaseConfig";
import { ref, get, remove } from "firebase/database";
import { useState, useEffect } from "react";

export default function TeamScreen({ equipo, setEquipo, navigation, username }) {

  const [selectedUser, setSelectedUser] = useState(username);
  const [otherTeam, setOtherTeam] = useState([]);
  const [users, setUsers] = useState([username]); // lista de jugadores

  const reiniciarEquipo = () => {
  Alert.alert(
    "Reiniciar equipo",
    "¿Estás seguro de que quieres borrar el equipo?",
    [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sí",
        style: "destructive",
        onPress: async () => {
          try {

            for (let personaje of equipo) {
              await AsyncStorage.removeItem(`efectos_${personaje.id}`);
            }

            await AsyncStorage.removeItem("equipo");

            // 🔥 BORRAR EQUIPO EN FIREBASE
            await remove(ref(db, "equipos/" + username));

            setEquipo([]);

            // actualizar lista de usuarios
            fetchUsers();

          } catch (error) {
            console.log("Error reiniciando equipo", error);
          }
        },
      },
    ]
  );
};

  // 🔹 Cargar lista de usuarios desde Firebase
  const fetchUsers = async () => {
  const snapshot = await get(ref(db, "equipos"));

  if (snapshot.exists()) {
    const data = snapshot.val();
    let lista = Object.keys(data);

    // 👇 Asegurar que tu usuario siempre esté en la lista
    if (!lista.includes(username)) {
      lista.push(username);
    }

    setUsers(lista);
  } else {
    // 👇 Si no hay nada en Firebase, al menos mostrar tu usuario
    setUsers([username]);
  }
};

  // 🔹 Cargar equipo de otro usuario
  const fetchTeam = async (user) => {

    if (!user) return;

    const snapshot = await get(ref(db, "equipos/" + user));

    if (snapshot.exists()) {
      setOtherTeam(snapshot.val());
    } else {
      setOtherTeam([]);
    }

  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
  if (selectedUser === username) {
    setOtherTeam([]); 
  } else {
    fetchTeam(selectedUser);
  }
}, [selectedUser]);

  const renderItem = ({ item }) => {

    const porcentajeVida = (item.vidaActual / item.vidaMax) * 100;
    const esDemonio = item.category === "Demon";

    return (
      <TouchableOpacity
        style={[
          styles.card,
          esDemonio && styles.cardDemonio,
        ]}
        onPress={() => {

          if (item.demonios) {
            navigation.navigate("HantenguDetail", { personaje: item });
          } else {
            navigation.navigate("CharacterDetail", { personaje: item, owner: selectedUser });

          }

        }}
      >

        <Image source={item.imagen} style={styles.image} />

        <View style={styles.infoContainer}>

          <Text
            style={[
              styles.nombre,
              esDemonio && styles.nombreDemonio,
            ]}
          >
            {item.nombre}
          </Text>

          <View style={styles.barraVidaFondo}>
            <View
              style={[
                styles.barraVida,
                {
                  width: `${porcentajeVida}%`,
                  backgroundColor:
                    porcentajeVida > 60
                      ? "#4CAF50"
                      : porcentajeVida > 30
                      ? "#FFC107"
                      : "#E53935",
                },
              ]}
            />
          </View>

          <Text style={styles.vidaTexto}>
            {item.vidaActual} / {item.vidaMax} HP
          </Text>

        </View>

      </TouchableOpacity>
    );
  };

  const equipoMostrado =
    selectedUser === username ? equipo : otherTeam;

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Equipo de {selectedUser}
      </Text>

      <Picker
        selectedValue={selectedUser}
        onValueChange={(val) => setSelectedUser(val)}
      >
        {users.map((user) => (
          <Picker.Item key={user} label={user} value={user} />
        ))}
      </Picker>

      {selectedUser === username && (
        <TouchableOpacity
          style={styles.reiniciar}
          onPress={reiniciarEquipo}
        >
          <Text style={styles.botonTexto}>
            Reiniciar equipo
          </Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={equipoMostrado}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#bda3a3",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "black",
  },

  reiniciar: {
    backgroundColor: "#B71C1C",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  botonTexto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#7b6a6a",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    elevation: 6,
    alignItems: "center",
  },

  cardDemonio: {
    borderWidth: 2,
    borderColor: "#8B0000",
  },

  image: {
    width: 65,
    height: 65,
    borderRadius: 35,
    marginRight: 15,
  },

  infoContainer: {
    flex: 1,
  },

  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },

  nombreDemonio: {
    color: "#ff4d4d",
  },

  barraVidaFondo: {
    height: 8,
    backgroundColor: "#333",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 6,
  },

  barraVida: {
    height: 8,
    borderRadius: 10,
  },

  vidaTexto: {
    fontSize: 12,
    color: "#ccc",
  },
});

