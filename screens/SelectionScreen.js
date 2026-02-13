import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { personajes } from "../data/personajes";

export default function SeleccionScreen({ navigation, equipo, setEquipo, category }) {

  const personajesFiltrados = personajes.filter((p) => p.category === category);

  const agregarAlEquipo = (personaje) => {

    if (equipo.find(p => p.id === personaje.id)) return;

    setEquipo([
      ...equipo,
      { ...personaje, vidaActual: personaje.vidaMax }
    ]);
  };

  const renderItem = ({ item }) => {

    const yaAgregado = equipo.find(p => p.id === item.id);

    return (
      <View style={styles.card}>
        <Image source={item.imagen} style={styles.image} />
        <Text style={styles.nombre}>{item.nombre}</Text>

        <TouchableOpacity 
          style={[styles.boton, yaAgregado && { backgroundColor: "gray" }]}
          onPress={() => agregarAlEquipo(item)}
        >
          <Text style={styles.botonTexto}>
            {yaAgregado ? "Agregado" : "Agregar"}
          </Text>
        </TouchableOpacity>
      </View>
      );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Selección de personajes</Text>

      <FlatList
        data={personajesFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </View>
);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },

  card: {
    flex: 1,
    margin: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    elevation: 3
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 8
  },

  nombre: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8
  },

  boton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8
  },

  botonTexto: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold"
  }
});
