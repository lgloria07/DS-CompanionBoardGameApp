import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function RulesScreen() {
  
  const rules = [
    'Al iniciar el juego, los "cazadores" eligen aleatoriamente 12 personajes totales y el "demonio" elige 9 demonios aleatorios y aparta la carta de Muzan.',
    "El tablero se arma 1 pieza por jugador (hasta completar las 20 piezas). Comienza el demonio.",
    "Una vez que el tablero esté armado, el demonio coloca en secreto la tarjeta de Muzan en cualquier casilla de demonio y coloca los 9 demonios restantes en las casillas libres de demonio.",
    "Los cazadores colocan sus personajes en alguna casilla de inicio.",
    "Los cazadores empiezan, tienen 2 action points.",
    "Un action point puede ser usado para moverse, atacar o salir de una pelea.",
    "Después de que los cazadores gasten sus primeros action points, el jugador demonio podrá desbloquear un demonio aleatorio.",
    "Siempre debe haber al menos 1 demonio desbloqueado.",
    "Cuando sea turno del demonio, tendrá 1 action point para cada demonio activo.",
    "Los demonios nunca deben estar solos. Si no hay cazadores en su casilla, jalan al cazador más cercano (no en combate), a la casilla de tanque.",
    "Si ya no hay cazadores restantes para jalar, el demonio jala a un enemigo en combate (que no sea el tanque). Si no hay cazadores disponibles, el demonio espera.",
    "Cuando un cazador llega a una casilla de demonio (ya sea porque lo jalaron o avanzó en el mapa), ataca automáticamente sin gastar un action point.",
    "Los demonios solo atacan al tanque (a menos que su habilidad indique lo contrario).",
    "Los jugadores pueden cambiar al tanque durante su turno sin gastar action points, pero no pueden hacerlo durante el turno del enemigo.",
    "Si el tanque muere durante el turno enemigo, los cazadores quedan expuestos y el demonio puede atacar a cualquiera.",
    "Los cazadores eliminan todos los efectos negativos al salir de combate",
    "El cazador que dé el golpe final a un demonio obtendrá +1 en sus tiradas de dado por el resto del juego (se puede acumular).",
    "Si un demonio mata a un cazador, lo devora, curandose 8 de vida y haciendo +1 de daño",
    "Los efectos negativos de demonios desaparen hasta que el demonio muera",
    "Cuando llegas a una casilla de objeto, desbloquealo, si no es una maldición puedes usarlo cuando quieras",
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
