import React, { useEffect, useState } from "react";
import {StyleSheet,Text,View,TextInput,Button,ActivityIndicator,Switch,Alert,SafeAreaView,Platform,Image,ImageBackground,} from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [terminos, setTerminos] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setTerminos(false);
  };

  const mostrarAlerta = () => {
    if (!nombre || !email) {
      if (Platform.OS ) {
        window.alert("Por favor, completa todos los campos obligatorios");
      } else {
        Alert.alert("Tienes que completar todos los campos", [{ text: "OK" }]);
      }
      return;
    }

    if (!terminos) {
      if (Platform.OS ) {
        window.alert("Tienes que aceptar los términos y condiciones");
      } else {
        Alert.alert("Aceptar los términos y condiciones", [{ text: "OK" }]);
      }
      return;
    }

    if (Platform.OS ) {
      window.alert(`Registro exitoso\nNombre: ${nombre}\nEmail: ${email}`);
      limpiarFormulario();
    } else {
      Alert.alert(
        "Registro exitoso",
        `Nombre: ${nombre}\nEmail: ${email}`,
        [{ text: "OK", onPress: () => limpiarFormulario() }]
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText}>Cargando...</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" }}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.switchContainer}>
            <Switch value={terminos} onValueChange={setTerminos} />
            <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
          </View>

          <Button title="Registrarse" onPress={mostrarAlerta} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    color: "white",
    fontSize: 28,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  formulario: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 14,
  },
});
