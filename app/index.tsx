import { Colors } from '@/constants/Colors';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function Login ()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validação básica por enquanto
    // if (email === 'teste@exemplo.com' && password === '123456') {
    //   router.replace('/(tabs)');
    // } else {
    //   alert('Credenciais inválidas');
    // }

    router.replace('/(tabs)');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View>
        <View style={styles.inputsContainer}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#55565F"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#55565F"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.forgotPass}>Esqueceu a senha?</Text>
          </View>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.register}>
            Ainda nao tem uma conta?
          </Text>
          <Link href={"/register"} style={styles.registerLink}>
            Registre-se
          </Link>
        </View>
        <Pressable
         style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.button,
        ]} 
          onPress={handleLogin}>
          <Text style={styles.text}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: '#1B2025',
    padding: 41,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'inter400',
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    marginTop: 40
  },
  input: {
    height: 40,
    marginBottom: 10,
    color: "white",
    paddingHorizontal: 10,
    alignContent: 'flex-end',
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#232631",
  },
  label: {
    fontFamily: 'inter400',
    color: 'white',
    fontSize: 14,
  },
  button: {
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: Colors.dark.blue,
    height: 36,
    marginTop: 20
  },
  text: {
    color: 'white',
    textAlign: "center",
    fontFamily: 'inter400'
  },
  forgotPass: {
    fontFamily: "inter400",
    justifyContent: "flex-end",
    textAlign: "right",
    color: "#90929E"
  },
  inputsContainer: {
    alignContent: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
    gap: 32
  },
  register: {
    fontFamily: "inter400",
    fontSize: 12,
    color: "#90929E",
    textAlign: "center",
  },
  registerLink: {
    color: "white",
    fontFamily: "inter400",
    fontSize: 12,
    textAlign: "center",
    textDecorationLine: 'underline',
  },
  registerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    gap: 4
  }
});
