import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import SeleccionScreen from './screens/SelectionScreen';
import TeamScreen from './screens/TeamScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.boton}
        onPress={() => navigation.navigate("Seleccion")}
      >
        <Text style={styles.textoBoton}>Comenzar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

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
          name="Seleccion"
          options={{ title: "Selección de personajes" }}
        >
          {(props) => (
            <SeleccionScreen 
              {...props}
              equipo={equipo}
              setEquipo={setEquipo}
            />
          )}
        </Stack.Screen>

        <Stack.Screen 
          name="Team"
          options={{ title: "Mi Equipo" }}
        >
          {(props) => (
            <TeamScreen 
              {...props}
              equipo={equipo}
              setEquipo={setEquipo}
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="CharacterDetail"
          component={CharacterDetailScreen}
          options={{ title: "Detalle del personaje" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
