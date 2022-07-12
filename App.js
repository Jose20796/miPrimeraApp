//import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
//import { Alert} from "react-native-web";
import React, { useState } from "react";

export default function App() {
  //Lógica
  //Definición de Hooks de Estado
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const sumar=()=>{
    if (evaluarNumeros()){
      Alert.alert("La suma es: "+(parseFloat(numero1)+parseFloat(numero2))) ;
    }
    };
    
  const restar=()=>{
    if (evaluarNumeros()){
      Alert.alert("La resta es: "+(parseFloat(numero1)-parseFloat(numero2))) ;
    }
    };

  const multiplicar=()=>{
    if (evaluarNumeros()){
      Alert.alert("La multiplicación es: "+(parseFloat(numero1)*parseFloat(numero2))) ;
    }
    };

  const dividir=()=>{
    if (evaluarNumeros() && parseFloat(numero2)>0){
      Alert.alert("La división es: "+(parseFloat(numero1)/parseFloat(numero2))) ;
    }else{
      Alert.alert("No se puede realizar la división para cero");
    }
    }; 


  function evaluarNumeros() {
    let num1 = numero1;
    let num2 = numero2;
    if (num1 == "" || num2 == "") {
        Alert.alert("Debe llenar todos los campos");
        return false;
    } else {
        if (/^\-?[0-9]+\.?[0-9]+$/.test(num1) || /^\-?[0-9]+\.?[0-9]+$/.test(num2)) {
                num1=parseFloat(num1);
                num2=parseFloat(num2);
            if (num1 < 0 || num2 < 0) {
                Alert.alert("Debe ingresar dos números positivos");
                return false;
            } else {
              return true;
            }
        } else {
            Alert.alert("Debe ingresar números. No caracteres");
            return false;
        }

    }




}

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Operaciones Matemáticas!</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Ingrese número 1"
          keyboardType="numeric"
          onChangeText={(value) => setNumero1(value)}
          //onChangeText={(value) => console.log(value)}
          value={numero1}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese número 2"
          keyboardType="numeric"
          onChangeText={(value) => setNumero2(value)}
          //onChangeText={(value) => console.log(value)}
          value={numero2}
        />
        <View style={styles.space} /> 
        <Button
          style={styles.input}
          title="SUMAR"
          onPress={() => sumar()}
        />
        <View style={styles.space} /> 
        <Button
        style={styles.button}
          title="RESTAR"
          onPress={() => restar()}
        />
        <View style={styles.space} /> 
        <Button
        style={styles.button}
          title="MULTIPLICAR"
          onPress={() => multiplicar()}
        />
        <View style={styles.space} /> 
        <Button
        style={styles.button}
          title="DIVIDIR"
          onPress={() => dividir()}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    marginBottom: 20,
    padding: 30,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});
