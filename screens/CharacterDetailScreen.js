import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function CharacterDetailScreen({ route }) {

  const { personaje } = route.params;

  return (
    <ScrollView style={styles.container}>

      <Image source={personaje.imagen} style={styles.image} />

      <Text style={styles.nombre}>{personaje.nombre}</Text>

      <Text style={styles.vida}>
        Vida: {personaje.vidaActual}/{personaje.vidaMax}
      </Text>

      <Text style={styles.tituloSeccion}>Pasiva</Text>
      <Text style={styles.descripcion}>{personaje.pasiva}</Text>

      <Text style={styles.tituloSeccion}>Habilidades</Text>

      {personaje.habilidades.map((h, index) => (
        <View key={index} style={styles.habilidad}>
          <Text style={styles.dado}>Dado: {h.dado}</Text>
          <Text style={styles.nombreHabilidad}>{h.nombre}</Text>
          <Text>{h.descripcion}</Text>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 15
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  vida: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5
  },
  descripcion: {
    marginBottom: 15
  },
  habilidad: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  dado: {
    fontWeight: "bold"
  },
  nombreHabilidad: {
    fontWeight: "bold"
  }
});
