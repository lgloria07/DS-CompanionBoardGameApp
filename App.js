import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Animated, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useState, useRef, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./screens/LoginScreen";
import RulesScreen from "./screens/RulesScreen";
import HantenguDetailScreen from './screens/HantenguDetailScreen';
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

function TabsScreen({ equipo, setEquipo, username, route, setIsLoggedIn }) {

  const { category } = route.params;

  const cerrarSesion = async () => {

    Alert.alert(
      "Cerrar sesión",
      "¿Seguro que quieres salir?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Salir",
          style: "destructive",
          onPress: async () => {

            await AsyncStorage.removeItem("user");
            await AsyncStorage.removeItem("equipo");

            setEquipo([]);
            setIsLoggedIn(false);

          },
        },
      ]
    );

  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === "Seleccion") {
            iconName = "people";
          } else if (route.name === "Team") {
            iconName = "shield";
          } else if (route.name === "Rules") {
            iconName = "book";
          } else if (route.name === "Logout") {
            iconName = "exit";
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
            username={username}
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="Team">
        {(props) => (
          <TeamScreen
            {...props}
            equipo={equipo}
            setEquipo={setEquipo}
            username={username}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Rules"
        component={RulesScreen}
        options={{ title: "Reglas" }}
      />

      {/* 🔹 Logout */}
      <Tab.Screen name="Logout">
        {() => (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#B71C1C",
                padding: 15,
                borderRadius: 10,
              }}
              onPress={cerrarSesion}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Cerrar sesión
              </Text>
            </TouchableOpacity>
          </View>
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {

    const user = await AsyncStorage.getItem("user");
    const savedTeam = await AsyncStorage.getItem("equipo");

    if (user) {
      const parsed = JSON.parse(user);
      setUsername(parsed.username);
      setIsLoggedIn(true);
    }

    if (savedTeam) {
      setEquipo(JSON.parse(savedTeam));
    }

    setLoading(false);

  };

  useEffect(() => {
    if (!loading) {
      AsyncStorage.setItem("equipo", JSON.stringify(equipo));
    }
  }, [equipo]);

  if (loading) return null;

  if (!isLoggedIn) {
    return <LoginScreen setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />;
  }

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
              username={username}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="CharacterDetail"
          options={{ title: "Detalle del personaje" }}
        >
          {(props) => (
            <CharacterDetailScreen
              {...props}
              equipo={equipo}
              setEquipo={setEquipo}
              username={username}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="HantenguDetail"
          options={{ title: "Detalle de Hantengu" }}
        >
          {(props) => (
            <HantenguDetailScreen
              {...props}
              equipo={equipo}
              setEquipo={setEquipo}
              username={username}
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

