import { Colors } from "@/constants/Colors";
import { TodoType, useTodoProvider } from "@/providers/todoProvider";
import { StyleSheet, Text, View } from "react-native";
import {Checkbox} from 'react-native-ui-lib';

type CategoryColorsType = {
  trabalho: string;
  casa: string;
  lazer: string;
  estudo: string;
  familia: string;
  atividadeFisica: string;
}

export default function Task({id, title, description, category, isCompleted}: TodoType) {
  const {todoTask, addTask} = useTodoProvider();

  const CategoryColors:CategoryColorsType  = {
    trabalho: Colors.dark.brown,
    casa: Colors.dark.red,
    lazer: Colors.dark.pink,    
    estudo: Colors.dark.green,    
    familia: Colors.dark.yellow,
    atividadeFisica: Colors.dark.purple,
  }

  const handleCompleteTask = () => {
    const allTodos = [...todoTask]
    allTodos.map((todo) => todo.id === id? todo.isCompleted = !todo.isCompleted : todo)
    addTask(allTodos)
  }


  return(
    <View style={[styles.container, {backgroundColor: !isCompleted ? CategoryColors[category as keyof typeof CategoryColors] : Colors.dark.darkBlue }]}>
      <Text style={[styles.title, {color: isCompleted ? Colors.dark.gray : "white"}]}>{title}</Text>
      <Text style={[styles.description, {color: isCompleted ? Colors.dark.gray : "white"}]}>{description}</Text>
      <Checkbox 
        style={styles.checkbox} 
        value={isCompleted} 
        onValueChange={() => handleCompleteTask()} 
        color={isCompleted ? Colors.dark.gray : "white"} 
        iconColor="white"
        disabled={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 8,
    padding: 24
  },
  title: {
    fontFamily: "inter400",
    color: "white",
  },
  description: {
    fontFamily: "inter400",
    color: "white",
  },
  checkbox: {
    height: 24,
    width: 24
  }
})