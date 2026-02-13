import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useState, useRef } from 'react';

import SeleccionScreen from './screens/SelectionScreen';
import TeamScreen from './screens/TeamScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* =========================
   HOME
========================= */

function HomeScreen({ navigation }) {

  const scaleSlayer = useRef(new Animated.Value(1)).current;
  const scaleDemon = useRef(new Animated.Value(1)).current;

  const animateIn = (scale) => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = (scale) => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={require("./assets/characters/fondo.webp")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        <Text style={styles.titulo}>DEMON SLAYER</Text>
        <Text style={styles.subtitulo}>Board Game App</Text>

        <View style={{ marginTop: 60 }}>

          <Animated.View style={{ transform: [{ scale: scaleSlayer }] }}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.boton, styles.slayer]}
              onPressIn={() => animateIn(scaleSlayer)}
              onPressOut={() => animateOut(scaleSlayer)}
              onPress={() => navigation.navigate("Tabs", { category: "slayer" })}
            >
              <Text style={styles.textoBoton}>Slayer</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: scaleDemon }] }}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.boton, styles.demon]}
              onPressIn={() => animateIn(scaleDemon)}
              onPressOut={() => animateOut(scaleDemon)}
              onPress={() => navigation.navigate("Tabs", { category: "demon" })}
            >
              <Text style={styles.textoBoton}>Demon</Text>
            </TouchableOpacity>
          </Animated.View>

        </View>

        <StatusBar style="light" />

      </View>
    </ImageBackground>
  );
}




/* =========================
   TABS
========================= */
function TabsScreen({ equipo, setEquipo, route }) {
  const { category } = route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Seleccion") {
            iconName = "people";
          } else if (route.name === "Team") {
            iconName = "shield";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        headerShown: false
      })}
    >
      <Tab.Screen name="Seleccion">
        {(props) => (
          <SeleccionScreen
            {...props}
            equipo={equipo}
            setEquipo={setEquipo}
            category={category}
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="Team">
        {(props) => (
          <TeamScreen
            {...props}
            equipo={equipo}
            setEquipo={setEquipo}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

/* =========================
   APP
========================= */
export default function App() {
  const [equipo, setEquipo] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Tabs"
          options={{ headerShown: false }}
        >
          {(props) => (
            <TabsScreen
              {...props}
              equipo={equipo}
              setEquipo={setEquipo}
            />
          )}
        </Stack.Screen>

        {/* 🔥 AQUÍ ESTÁ EL CAMBIO IMPORTANTE */}
        <Stack.Screen
          name="CharacterDetail"
          options={{ title: "Detalle del personaje" }}
        >
          {(props) => (
            <CharacterDetailScreen
              {...props}
              equipo={equipo}
              setEquipo={setEquipo}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* =========================
   STYLES
========================= */
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 3,
    textShadowColor: "rgba(0,0,0,0.9)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: "#dddddd",
    marginTop: 5,
    letterSpacing: 1
  },
  boton: {
    paddingVertical: 18,
    borderRadius: 25,
    width: 240,
    alignItems: "center",
    marginBottom: 20,
    elevation: 8,
  },
  slayer: {
    backgroundColor: "#4CAF50",
    shadowColor: "#4CAF50",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 12,
},
  demon: {
    backgroundColor: "#c62828",
    shadowColor: "#ff0000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 12,
},
  textoBoton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1
  }
});

