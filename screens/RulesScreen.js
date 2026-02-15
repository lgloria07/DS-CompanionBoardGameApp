import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function RulesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>Reglas del Juego</Text>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Al iniciar el juego los "cazadores" deben elegir aleatoriamente 12 personajes totales y el "demonio" debe elegir 9 demonios aleatorios y apartar la carta de Muzan.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        El tablero se armará 1 pieza por jugar (hasta completar las 20 piezas). Empieza el demonio.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Una vez que el tablero esté armado, el demonio colocará en secreto la tarjeta de Muzan en cualquier casilla de demonio y colocará los 9 demonios restantes en las casillas libres de demonio.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Los cazadores deberán colocar sus personajes en alguna casilla de inicio.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Los cazadores empiezan, tienen 2 action points. 
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Un action point puede ser usado para moverse, atacar o salir de una pelea.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Despues de que los cazadores gastan sus primeros action points, el jugador demonio puede desbloquear un demonio aleatorio. 
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Siempre debe haber al menos 1 demonio desbloqueado.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Cuando sea turno del demonio, tendrá 1 action point para cada demonio activo.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Los demonios nunca pueden estar solos. Si no hay cazadores en su casilla, jalan al cazador más cercano (no en combate), a la casilla de tanque.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Si ya no hay cazadores restantes para jalar, el demonio jala a un enemigo en combate (que no sea el tanque). Si no hay cazadores disponibles, el demonio espera.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Cuando un cazador llega a una casilla de demonio (ya sea porque lo jalaron o avanzó en el mapa), ataca automaticamente sin gastar un action point.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Los demonios solo atacan al tanque (a menos que su habilidad indique lo contario).
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Los jugadores pueden cambiar al tanque dutante su turno sin gastar action points, pero no pueden hacerlo durante el turno del enemigo.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Si el tanque muere durante el turno enemigo, los cazadores quedan expuestos y el demonio puede atacar a cualquiera.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        El cazador que le de el golpe final a un demonio, obtendra +1 en sus tiradas de dado por el resto del juego (se puede acumular).
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        Los cazadores ganan si derrotan a Muzan.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rule}>
        El demonio gana si mata a todos los cazadores.
        </Text>
      </View>

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
    textAlign: "center",   // 🔥 centrado
    marginBottom: 25,
    color: "#333",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignContent: "center",
  },
  rule: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
    textAlign: "center",
  },
});
