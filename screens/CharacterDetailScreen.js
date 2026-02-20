import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [modo, setModo] = useState(null);

  const [efectos, setEfectos] = useState({
    ataqueExtra: "",
    curacionRonda: "",
    puntuacionExtra: "",
    envenenamiento: "",
    escudo: "",
    resistencia: "",
    especial:
      personaje.efectoEspecial?.tipo === "boolean" ? false : "",
  });

  /* =========================
        GUARDAR EFECTOS
  ========================= */

  const guardarEfectos = async (nuevosEfectos) => {
    try {
      await AsyncStorage.setItem(
        `efectos_${personaje.id}`,
        JSON.stringify(nuevosEfectos)
      );
    } catch (error) {
      console.log("Error guardando efectos", error);
    }
  };

  /* =========================
        CARGAR EFECTOS
  ========================= */

  const cargarEfectos = async () => {
    try {
      const datosGuardados = await AsyncStorage.getItem(
        `efectos_${personaje.id}`
      );

      if (datosGuardados !== null) {
        setEfectos(JSON.parse(datosGuardados));
      }
    } catch (error) {
      console.log("Error cargando efectos", error);
    }
  };

  /* =========================
        AL ABRIR PANTALLA
  ========================= */

  useEffect(() => {
    cargarEfectos();
  }, []);

  /* =========================
        GUARDAR AUTOMÁTICO
  ========================= */

  useEffect(() => {
    guardarEfectos(efectos);
  }, [efectos]);

  /* =========================
        VIDA
  ========================= */

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

    setVidaActual(nuevaVida);

    const equipoActualizado = equipo.map((p) =>
      p.id === personaje.id
        ? { ...p, vidaActual: nuevaVida }
        : p
    );

    setEquipo(equipoActualizado);

    setCantidad("");
    setModo(null);
  };

  const coloresHabilidades = [
    "#A3A692",
    "#DBE675",
    "#81B0E3",
    "#81E397",
    "#E38181",
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>

        {/* TOP SECTION */}
        <View style={styles.topSection}>
          <Image source={personaje.imagen} style={styles.image} />

          <View style={styles.efectosContainer}>

            <Text style={styles.efectoLabel}>Ataque extra</Text>
            <TextInput
              style={styles.efectoInput}
              keyboardType="numeric"
              value={efectos.ataqueExtra}
              onChangeText={(text) =>
                setEfectos({ ...efectos, ataqueExtra: text })
              }
            />

            <Text style={styles.efectoLabel}>Curación / ronda</Text>
            <TextInput
              style={styles.efectoInput}
              keyboardType="numeric"
              value={efectos.curacionRonda}
              onChangeText={(text) =>
                setEfectos({ ...efectos, curacionRonda: text })
              }
            />

            <Text style={styles.efectoLabel}>Puntuación extra/reducida</Text>
            <TextInput
              style={styles.efectoInput}
              keyboardType="numeric"
              value={efectos.puntuacionExtra}
              onChangeText={(text) =>
                setEfectos({ ...efectos, puntuacionExtra: text })
              }
            />

            <Text style={styles.efectoLabel}>Envenenamiento</Text>
            <TextInput
              style={styles.efectoInput}
              keyboardType="numeric"
              value={efectos.envenenamiento}
              onChangeText={(text) =>
                setEfectos({ ...efectos, envenenamiento: text })
              }
            />

            <Text style={styles.efectoLabel}>Escudo</Text>
            <TextInput
              style={styles.efectoInput}
              keyboardType="numeric"
              value={efectos.escudo}
              onChangeText={(text) =>
                setEfectos({ ...efectos, escudo: text })
              }
            />

            <Text style={styles.efectoLabel}>Resistencia</Text>
            <TextInput
              style={styles.efectoInput}
              keyboardType="numeric"
              value={efectos.resistencia}
              onChangeText={(text) =>
                setEfectos({ ...efectos, resistencia: text })
              }
            />

            {personaje.efectoEspecial && (
              <>
                <Text style={styles.efectoLabel}>
                  {personaje.efectoEspecial.nombre}
                </Text>

                {personaje.efectoEspecial.tipo === "boolean" ? (
                  <TouchableOpacity
                    style={[
                      styles.checkbox,
                      efectos.especial && styles.checkboxActivo
                    ]}
                    onPress={() =>
                      setEfectos({
                        ...efectos,
                        especial: !efectos.especial
                      })
                    }
                  >
                    <Text style={styles.checkboxTexto}>
                      {efectos.especial ? "✓ Activo" : "Activar"}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TextInput
                    style={styles.efectoInput}
                    keyboardType="numeric"
                    value={efectos.especial}
                    onChangeText={(text) =>
                      setEfectos({ ...efectos, especial: text })
                    }
                  />
                )}
              </>
            )}

          </View>
        </View>

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

        {/* INPUT VIDA */}
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
    backgroundColor: "#d6c9c9",
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
    topSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },

  efectosContainer: {
    flex: 1,
    marginLeft: 15,
  },

  efectoLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },

  efectoInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 4,
    fontSize: 12,
    textAlign: "center",
    backgroundColor: "#fafafa",
  },
  checkbox: {
    backgroundColor: "#444",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 8,
  },

  checkboxActivo: {
    backgroundColor: "#4CAF50",
  },

  checkboxTexto: {
    color: "white",
    fontWeight: "bold",
  },


});
  