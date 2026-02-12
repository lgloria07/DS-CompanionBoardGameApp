import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";

export default function TeamScreen({ equipo, setEquipo, navigation }) {

  const reiniciarEquipo = () => {
    Alert.alert(
      "Reiniciar equipo",
      "¿Estás seguro de que quieres borrar el equipo?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sí", 
          style: "destructive",
          onPress: () => {
            setEquipo([]); 
            navigation.navigate("Seleccion");
          }       
        }
      ]
    );
  };

  const renderItem = ({ item }) => (
  <TouchableOpacity 
    style={styles.card}
    onPress={() => navigation.navigate("CharacterDetail", { personaje: item })}
  >
    <Image source={item.imagen} style={styles.image} />

    <Text style={styles.nombre}>
      {item.nombre}
    </Text>

    <Text style={styles.vida}>
      {item.vidaActual}/{item.vidaMax}
    </Text>
  </TouchableOpacity>
);


  return (
    <View style={styles.container}>

      {/* Botón volver */}
      <TouchableOpacity 
        style={styles.volver}
        onPress={() => navigation.navigate("Seleccion")}
      >
        <Text style={styles.botonTexto}>
          Seguir agregando
        </Text>
      </TouchableOpacity>

      {/* Botón reiniciar */}
      <TouchableOpacity 
        style={styles.reiniciar}
        onPress={reiniciarEquipo}
      >
        <Text style={styles.botonTexto}>
          Reiniciar equipo
        </Text>
      </TouchableOpacity>

      <FlatList
        data={equipo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },

  volver: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  },

  reiniciar: {
    backgroundColor: "#e53935",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15
  },

  botonTexto: {
    color: "white",
    fontWeight: "bold"
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10
  },

  image: {
    width: 50,
    height: 50,
    marginRight: 15
  },

  nombre: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold"
  },

  vida: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
