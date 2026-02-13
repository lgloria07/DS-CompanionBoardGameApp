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

export default function CharacterDetailScreen({ route, equipo, setEquipo }) {
  const { personaje } = route.params;

  const [vidaActual, setVidaActual] = useState(personaje.vidaActual);
  const [cantidad, setCantidad] = useState("");
  const [modo, setModo] = useState(null); // "sumar" o "restar"

  const coloresHabilidades = [
    "#A3A692",
    "#DBE675",
    "#81B0E3",
    "#81E397",
    "#E38181",
  ];

  const aplicarCambio = () => {
  const numero = parseInt(cantidad);

  if (isNaN(numero) || numero <= 0) return;

  let nuevaVida =
    modo === "sumar"
      ? vidaActual + numero
      : vidaActual - numero;

  if (nuevaVida > personaje.vidaMax)
    nuevaVida = personaje.vidaMax;

  if (nuevaVida < 0)
    nuevaVida = 0;

  // 🔥 ACTUALIZAR ESTADO LOCAL
  setVidaActual(nuevaVida);

  // 🔥 ACTUALIZAR EL EQUIPO GLOBAL
  const equipoActualizado = equipo.map((p) =>
    p.id === personaje.id
      ? { ...p, vidaActual: nuevaVida }
      : p
  );

  setEquipo(equipoActualizado);

  setCantidad("");
  setModo(null);
};


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Image source={personaje.imagen} style={styles.image} />

        <Text style={styles.nombre}>{personaje.nombre}</Text>

        {/* VIDA */}
        <View style={styles.vidaContainer}>
          <TouchableOpacity
            style={[styles.botonVida, styles.botonRestar]}
            onPress={() => setModo("restar")}
          >
            <Text style={styles.textoBotonVida}>-</Text>
          </TouchableOpacity>

          <View style={styles.vidaBox}>
            <Text style={styles.vidaTexto}>
              ❤️ {vidaActual}/{personaje.vidaMax}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.botonVida, styles.botonSumar]}
            onPress={() => setModo("sumar")}
          >
            <Text style={styles.textoBotonVida}>+</Text>
          </TouchableOpacity>
        </View>

        {/* INPUT */}
        {modo && (
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Cantidad"
              keyboardType="numeric"
              value={cantidad}
              onChangeText={setCantidad}
              style={styles.input}
            />

            <TouchableOpacity
              onPress={aplicarCambio}
              style={[
                styles.botonConfirmar,
                {
                  backgroundColor:
                    modo === "sumar" ? "#4CAF50" : "#e53935",
                },
              ]}
            >
              <Text style={styles.textoConfirmar}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* PASIVA */}
        <View style={styles.pasivaBox}>
          <Text style={styles.tituloPasiva}>Pasiva</Text>
          <Text style={styles.descripcionPasiva}>
            {personaje.pasiva}
          </Text>
        </View>
      </View>

      {/* HABILIDADES */}
      <Text style={styles.tituloSeccion}>Habilidades</Text>

      {personaje.habilidades.map((h, index) => (
        <View key={index} style={styles.habilidadContainer}>
          <View
            style={[
              styles.habilidadHeader,
              {
                backgroundColor:
                  coloresHabilidades[
                    index % coloresHabilidades.length
                  ],
              },
            ]}
          >
            <Text style={styles.habilidadTitulo}>
              DADO: {h.dado} – {h.nombre}
            </Text>
          </View>

          <View style={styles.habilidadBody}>
            <Text style={styles.descripcionHabilidad}>
              {h.descripcion}
            </Text>
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
    textAlign: "center",
    marginBottom: 15,
  },

  /* VIDA */
  vidaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  vidaBox: {
    backgroundColor: "#ffebee",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },

  vidaTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#c62828",
  },

  botonVida: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    elevation: 3,
  },

  botonSumar: {
    backgroundColor: "#4CAF50",
  },

  botonRestar: {
    backgroundColor: "#e53935",
  },

  textoBotonVida: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  /* INPUT */
  inputContainer: {
    alignItems: "center",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: 120,
    textAlign: "center",
    marginBottom: 10,
  },

  botonConfirmar: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  textoConfirmar: {
    color: "white",
    fontWeight: "bold",
  },

  /* PASIVA */
  pasivaBox: {
    width: "100%",
    backgroundColor: "#ede7f6",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  tituloPasiva: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  descripcionPasiva: {
    fontSize: 14,
    textAlign: "center",
  },

  tituloSeccion: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  /* HABILIDADES */
  habilidadContainer: {
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
  },

  habilidadHeader: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  habilidadTitulo: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },

  habilidadBody: {
    backgroundColor: "white",
    padding: 15,
  },

  descripcionHabilidad: {
    fontSize: 14,
    textAlign: "center",
  },
});
  