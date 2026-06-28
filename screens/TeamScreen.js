import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebaseConfig";
import { ref, remove, onValue, off } from "firebase/database";
import { useState, useEffect } from "react";

export default function TeamScreen({
  equipo,
  setEquipo,
  navigation,
  username,
}) {
  const [selectedUser, setSelectedUser] = useState(username);
  const [otherTeam, setOtherTeam] = useState([]);
  const [users, setUsers] = useState([username]);

  /* =========================
      REINICIAR EQUIPO
  ========================= */

  const reiniciarEquipo = () => {
    Alert.alert(
      "Reiniciar equipo",
      "¿Estás seguro de que quieres borrar el equipo?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sí",
          style: "destructive",
          onPress: async () => {
            try {
              for (let personaje of equipo) {
                await AsyncStorage.removeItem(
                  `efectos_${personaje.id}`
                );
              }

              await AsyncStorage.removeItem("equipo");

              await remove(ref(db, "equipos/" + username));

              setEquipo([]);
            } catch (error) {
              console.log(
                "Error reiniciando equipo",
                error
              );
            }
          },
        },
      ]
    );
  };

  /* =========================
      USUARIOS EN TIEMPO REAL
  ========================= */

  useEffect(() => {
    const equiposRef = ref(db, "equipos");

    const unsubscribe = onValue(
      equiposRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          let lista = Object.keys(data);

          if (!lista.includes(username)) {
            lista.push(username);
          }

          setUsers(lista);
        } else {
          setUsers([username]);
        }
      }
    );

    return () => {
      off(equiposRef);
    };
  }, []);

  /* =========================
      ESCUCHAR EQUIPO
  ========================= */

  useEffect(() => {
    let teamRef;

    if (selectedUser === username) {
      setOtherTeam([]);
    } else {
      teamRef = ref(
        db,
        "equipos/" + selectedUser
      );

      onValue(teamRef, (snapshot) => {
        if (snapshot.exists()) {
          setOtherTeam(snapshot.val());
        } else {
          setOtherTeam([]);
        }
      });
    }

    return () => {
      if (teamRef) {
        off(teamRef);
      }
    };
  }, [selectedUser]);

  /* =========================
      RENDER PERSONAJE
  ========================= */

  const renderItem = ({ item }) => {
    const porcentajeVida =
      (item.vidaActual / item.vidaMax) * 100;

    const esDemonio =
      item.category === "Demon";

    return (
      <TouchableOpacity
        style={[
          styles.card,
          esDemonio &&
            styles.cardDemonio,
        ]}
        onPress={() => {
          if (item.demonios) {
            navigation.navigate(
              "HantenguDetail",
              { personaje: item }
            );
          } else {
            navigation.navigate(
              "CharacterDetail",
              {
                personaje: item,
                owner: selectedUser,
              }
            );
          }
        }}
      >
        <Image
          source={item.imagen}
          style={styles.image}
        />

        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.nombre,
              esDemonio &&
                styles.nombreDemonio,
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
    selectedUser === username
      ? equipo
      : otherTeam;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Equipos
      </Text>

      {/* TABS DE USUARIOS */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {users.map((user) => (
          <TouchableOpacity
            key={user}
            style={[
              styles.tab,
              selectedUser === user && styles.tabActiva,
            ]}
            onPress={() => setSelectedUser(user)}
          >
            <Text
              style={[
                styles.tabTexto,
                selectedUser === user &&
                  styles.tabTextoActivo,
              ]}
            >
              {user}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.subtitulo}>
        Equipo de {selectedUser}
      </Text>

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

      <View style={styles.listaContainer}>
        <FlatList
          data={equipoMostrado}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}
        />
      </View>
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
  fontSize: 26,
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 30,
  marginBottom: 20,
  color: "black",
},

  tabsContainer: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 5,
  paddingVertical: 5,
  marginBottom: 8,
  marginTop: -450,
},

  tab: {
  minWidth: 75,
  height: 42,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#8b7d7d",
  borderRadius: 21,
  marginRight: 8,
  paddingHorizontal: 12,
},

  tabActiva: {
  backgroundColor: "#4CAF50",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},

  tabTexto: {
  color: "white",
  fontWeight: "600",
  fontSize: 15,
},

  tabTextoActivo: {
    fontWeight: "bold",
  },

  subtitulo: {
  textAlign: "center",
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 10,
  color: "black",
  marginTop: -450,
},  

  reiniciar: {
  backgroundColor: "#B71C1C",
  padding: 12,
  borderRadius: 20,
  alignItems: "center",
  marginBottom: 12,
  marginTop: -40,
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
  lista: {
  paddingBottom: 20,
},
listaContainer: {
  flex: 1,
  marginTop: 5,
},
});