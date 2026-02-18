import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { personajes } from "../data/personajes";

export default function SeleccionScreen({
  navigation,
  equipo,
  setEquipo,
  category,
}) {
  const personajesFiltrados = personajes.filter(
    (p) => p.category === category
  );

  const agregarAlEquipo = (personaje) => {
    const yaExiste = equipo.find((p) => p.id === personaje.id);

    if (yaExiste) {
      Alert.alert(
        "Quitar personaje",
        `¿Seguro que quieres quitar a ${personaje.nombre}?`,
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Quitar",
            style: "destructive",
            onPress: () => {
              setEquipo(equipo.filter((p) => p.id !== personaje.id));
            },
          },
        ]
      );
    } else {
      setEquipo([
        ...equipo,
        { ...personaje, vidaActual: personaje.vidaMax },
      ]);
    }
  };

  const getCategoryColor = (type) => {
    switch (type) {
      case "Slayer":
        return "#E53935"; // rojo
      case "Mage":
        return "#8E24AA"; // morado
      case "Tank":
        return "#1E88E5"; // azul
      case "Support":
        return "#7d1e6b"; // azul
      default:
        return "#966316"; // verde
    }
  };

  const renderItem = ({ item }) => {
    const yaAgregado = equipo.find((p) => p.id === item.id);

    return (
      <View
        style={[
          styles.card,
          yaAgregado && styles.cardSeleccionada,
        ]}
      >
        <View
          style={[
            styles.badge,
            { backgroundColor: getCategoryColor(item.type) },
          ]}
        >
          <Text style={styles.badgeText}>
            {item.type}
          </Text>
        </View>


        <Image source={item.imagen} style={styles.image} />

        <Text style={styles.nombre}>{item.nombre}</Text>

        <TouchableOpacity
          style={[
            styles.boton,
            yaAgregado
              ? styles.botonAgregado
              : styles.botonAgregar,
          ]}
          onPress={() => agregarAlEquipo(item)}
        >
          <Text style={styles.botonTexto}>
            {yaAgregado ? "✓ En equipo" : "+ Agregar"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Selección de personajes
      </Text>

      <FlatList
        data={personajesFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
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
    paddingHorizontal: 12,
    backgroundColor: "#7bb897", 
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
    color: "black",
  },

  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#726868",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    elevation: 8,
  },

  cardSeleccionada: {
    borderWidth: 2,
    borderColor: "#4CAF50",
  },

  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
    marginTop: 10,
  },

  nombre: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
    color: "white",
  },

  boton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 25,
  },

  botonAgregar: {
    backgroundColor: "#4CAF50",
  },

  botonAgregado: {
    backgroundColor: "#2E7D32",
  },

  botonTexto: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
});

