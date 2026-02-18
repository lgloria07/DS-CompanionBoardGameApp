import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function RulesScreen() {
  
  const rules = [
    'Al iniciar el juego los "cazadores" deben elegir aleatoriamente 12 personajes totales y el "demonio" debe elegir 9 demonios aleatorios y apartar la carta de Muzan.',
    "El tablero se armará 1 pieza por jugador (hasta completar las 20 piezas). Empieza el demonio.",
    "Una vez que el tablero esté armado, el demonio colocará en secreto la tarjeta de Muzan en cualquier casilla de demonio y colocará los 9 demonios restantes en las casillas libres de demonio.",
    "Los cazadores deberán colocar sus personajes en alguna casilla de inicio.",
    "Los cazadores empiezan, tienen 2 action points.",
    "Un action point puede ser usado para moverse, atacar o salir de una pelea.",
    "Después de que los cazadores gastan sus primeros action points, el jugador demonio puede desbloquear un demonio aleatorio.",
    "Siempre debe haber al menos 1 demonio desbloqueado.",
    "Cuando sea turno del demonio, tendrá 1 action point para cada demonio activo.",
    "Los demonios nunca pueden estar solos. Si no hay cazadores en su casilla, jalan al cazador más cercano (no en combate), a la casilla de tanque.",
    "Si ya no hay cazadores restantes para jalar, el demonio jala a un enemigo en combate (que no sea el tanque). Si no hay cazadores disponibles, el demonio espera.",
    "Cuando un cazador llega a una casilla de demonio (ya sea porque lo jalaron o avanzó en el mapa), ataca automáticamente sin gastar un action point.",
    "Los demonios solo atacan al tanque (a menos que su habilidad indique lo contrario).",
    "Los jugadores pueden cambiar al tanque durante su turno sin gastar action points, pero no pueden hacerlo durante el turno del enemigo.",
    "Si el tanque muere durante el turno enemigo, los cazadores quedan expuestos y el demonio puede atacar a cualquiera.",
    "El cazador que dé el golpe final a un demonio obtendrá +1 en sus tiradas de dado por el resto del juego (se puede acumular).",
    "Los cazadores ganan si derrotan a Muzan.",
    "El demonio gana si mata a todos los cazadores."
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>Reglas del Juego</Text>

      {rules.map((rule, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.number}>{index + 1}</Text>
          <Text style={styles.rule}>{rule}</Text>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#f2f2f2",
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#222",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "flex-start",

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  number: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 12,
    color: "#8b0000",
  },
  rule: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
  },
});
