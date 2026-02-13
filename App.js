import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import SeleccionScreen from './screens/SelectionScreen';
import TeamScreen from './screens/TeamScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* =========================
   HOME
========================= */
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.textoBoton}>Comenzar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

/* =========================
   TABS
========================= */
function TabsScreen({ equipo, setEquipo }) {
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  textoBoton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
