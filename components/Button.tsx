import { Colors } from "@/constants/Colors";
import { Pressable, Text, StyleSheet, TouchableHighlight } from "react-native";

type ButtonProps = {
  text: string,
  onClick: () => void;
  color?: string;
}

export default function Button({text, onClick, color}: ButtonProps) {
  return (
    <TouchableHighlight
      onPress={onClick}
      style={[styles.button, {backgroundColor: color ? color : "#006CF5"}]}  
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#006CF5",
    height: 36,
    marginTop: 20
  },
  text: {
    color: 'white',
    textAlign: "center",
    fontFamily: 'inter400',
    fontSize: 16
  },
})