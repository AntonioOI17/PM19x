import React, { useState } from "react";
import { View, Text,TextInput,Button,Alert,StyleSheet,SafeAreaView,Platform, } from "react-native";

const App = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefono, setTelefono] = useState("");


    const mostrarAlerta = () => {
        if(!nombre || !email || !password){
            if(Plataform.OS === "web"){
                window.alert("Por favor, completa los campos obligatorios")
            }else {
                Alert.alert(
                    "Error",
                    "Por favor, complete todos los campos obligatorios",
                    [{text:"OK"}]
                );
            }

    }else{
    if(Platform.OS === "web"){
            window.alert(` registro exitoso Nombre:${nombre} Email:${email}`);
        limpiarFormulario();
    }else{
     Alert.alert(
          "Registro exitoso"
          ` Nombre: ${nombre} Email: ${email}` ,
          [{text:"ok", onPress:()=> limpiarFormulario()}]    
)
    }
 }    

};

    const limpiarFormulario = () =>{
        setNombre("");
        setEmail("");
        setPassword("");
        setTelefono("");
    };

    return (
        <SafeAreaView style={style.container}>
        <View style={style.formulario}>
        <Text style={style.titulo}> Registro de usuario</Text>
        <TextInput
            style={style.input}
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
         />
          <TextInput
            style={style.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
         />
          <TextInput
            style={style.input}
            placeholder="Contraseña*"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            
         />
          <TextInput
            style={style.input}
            placeholder="Telefono (opcional)"
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
            />
            <Button title="Regristrarse" onPress={mostrarAlerta}/>

        </View>
        </SafeAreaView>
    );
  } ;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  formulario: {
    backgroundColor: "#f5f5f5",
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
});

export default App;
