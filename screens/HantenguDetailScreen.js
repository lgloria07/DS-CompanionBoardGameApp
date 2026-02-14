import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function HantenguDetailScreen({ route, equipo, setEquipo }) {
  const { personaje } = route.params;

  const [vidaActual, setVidaActual] = useState(personaje.vidaActual);
  const [demonios, setDemonios] = useState(personaje.demonios || []);


  /* ================= VIDA PRINCIPAL ================= */

  const actualizarVidaPrincipal = (nuevaVida) => {
    if (nuevaVida > personaje.vidaMax) nuevaVida = personaje.vidaMax;
    if (nuevaVida < 0) nuevaVida = 0;

    setVidaActual(nuevaVida);

    const equipoActualizado = equipo.map((p) =>
      p.id === personaje.id
        ? { ...p, vidaActual: nuevaVida }
        : p
    );

    setEquipo(equipoActualizado);
  };

  /* ================= VIDA DEMONIOS ================= */

  const actualizarVidaDemonio = (id, nuevaVida) => {
    const demoniosActualizados = demonios.map((d) => {
      if (d.id === id) {
        if (nuevaVida > d.vidaMax) nuevaVida = d.vidaMax;
        if (nuevaVida < 0) nuevaVida = 0;

        return { ...d, vidaActual: nuevaVida };
      }
      return d;
    });

    setDemonios(demoniosActualizados);

    const equipoActualizado = equipo.map((p) =>
      p.id === personaje.id
        ? { ...p, demonios: demoniosActualizados }
        : p
    );

    setEquipo(equipoActualizado);
  };

  return (
    <ScrollView 
    style={styles.container}
    contentContainerStyle={{paddingBottom: 60}}
    >

      {/* ======= CARTA PRINCIPAL ======= */}
      <View style={styles.card}>
        <Image source={personaje.imagen} style={styles.image} />
        <Text style={styles.nombre}>{personaje.nombre}</Text>

        <View style={styles.vidaBox}>
          <Text style={styles.vidaTexto}>
            ❤️ {vidaActual}/{personaje.vidaMax}
          </Text>
        </View>

        <View style={styles.pasivaBox}>
          <Text style={styles.tituloPasiva}>Pasiva</Text>
          <Text style={styles.descripcionPasiva}>
            {personaje.pasiva}
          </Text>
        </View>
      </View>

      {/* ======= DEMONIOS INVOCADOS ======= */}
      <Text style={styles.tituloSeccion}>Demonios Invocados</Text>

      {demonios?.map((demonio) => (
        <View key={demonio.id} style={styles.demonioCard}>

          <Image source={demonio.imagen} style={styles.demonioImagen} />

          <Text style={styles.demonioNombre}>
            {demonio.nombre}
          </Text>

          <Text style={styles.demonioHabilidad}>
            {demonio.habilidad}
          </Text>

          {/* VIDA EDITABLE */}
          <View style={styles.vidaContainer}>
            <TouchableOpacity
              style={styles.botonRestar}
              onPress={() =>
                actualizarVidaDemonio(
                  demonio.id,
                  demonio.vidaActual - 1
                )
              }
            >
              <Text style={styles.textoBoton}>-</Text>
            </TouchableOpacity>

            <View style={styles.vidaMiniBox}>
              <Text style={styles.vidaMiniTexto}>
                {demonio.vidaActual}/{demonio.vidaMax}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.boton}
              onPress={() =>
                actualizarVidaDemonio(
                  demonio.id,
                  demonio.vidaActual + 1
                )
              }
            >
              <Text style={styles.textoBoton}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    alignItems: "center",
    elevation: 5,
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 15,
    marginBottom: 15,
  },

  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  vidaBox: {
    backgroundColor: "#ffebee",
    padding: 10,
    borderRadius: 15,
    marginBottom: 15,
  },

  vidaTexto: {
    fontWeight: "bold",
    color: "#c62828",
  },

  pasivaBox: {
    width: "100%",
    backgroundColor: "#ede7f6",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  tituloPasiva: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  descripcionPasiva: {
    textAlign: "center",
  },

  tituloSeccion: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  demonioCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 4,
  },

  demonioImagen: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
  },

  demonioNombre: {
    fontSize: 18,
    fontWeight: "bold",
  },

  demonioHabilidad: {
    textAlign: "center",
    marginVertical: 10,
  },

  vidaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  boton: {
    backgroundColor: "#4CAF50",
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  botonRestar: {
    backgroundColor: "#e53935",
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },


  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  vidaMiniBox: {
    backgroundColor: "#ffebee",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },

  vidaMiniTexto: {
    fontWeight: "bold",
    color: "#c62828",
  },
});
