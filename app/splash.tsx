import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Image
          source={require('@/assets/images/carderno.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Caderninho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#1B2025"
  },
  logo: {
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontFamily: "Inter_400Regular",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 14
  }
});
