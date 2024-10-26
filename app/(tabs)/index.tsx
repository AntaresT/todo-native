
import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { useTodoProvider } from "@/providers/todoProvider";
import { useState } from "react";
import { Text, View, StyleSheet, Pressable, TextInput, TouchableHighlight } from "react-native";

export default function TaskScreen() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const {todoTask, addTask} = useTodoProvider()

  const handleCategory = (category: string) => {
    setCategory(category)
  }

  const handleSubmit = () => {
    if(title && description) {
      addTask([...todoTask, {
        id: Math.floor(Math.random() * 10000),
        category,
        description,
        title
      }])
    }
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Criar nova tarefa</Text> 
        <View style={styles.category}>
          <Text style={styles.subTitle}>Categorias</Text>
          <View style={styles.categoryContainer}>
            <TouchableHighlight 
              onPress={() => handleCategory("casa")} 
              style={[styles.categoryButton, {backgroundColor: Colors.dark.red}]}
            >
              <Text style={styles.categoryText}>Casa</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => handleCategory("estudo")}
              style={[styles.categoryButton, {backgroundColor: Colors.dark.green}]}
            >
              <Text style={styles.categoryText}>Estudo</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => handleCategory("familia")} 
              style={[styles.categoryButton, {backgroundColor: Colors.dark.yellow}]}
            >
              <Text style={styles.categoryText}>Familia</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.categoryContainer}>
            <TouchableHighlight 
              onPress={() => handleCategory("atividadeFisica")} 
              style={[styles.categoryButton, {backgroundColor: Colors.dark.purple}]}
            >
              <Text style={styles.categoryText}>Atividade fisica</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => handleCategory("trabalho")} 
              style={[styles.categoryButton, {backgroundColor: Colors.dark.brown}]}
            >
              <Text style={styles.categoryText}>Trabalho</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => handleCategory("lazer")} 
              style={[styles.categoryButton, {backgroundColor: Colors.dark.pink}]}
            >
              <Text style={styles.categoryText}>Lazer</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.label}>Titulo</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#55565F"
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={[styles.input, {height: 97}]}
              placeholderTextColor="#55565F"
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <Button text="Adicionar tarefa" onClick={handleSubmit} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.bgScreen,
    gap: 30,
    height: "100%",
    justifyContent: "space-between",
    padding: 41,
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 19,
  },
  label: {
    color: 'white',
    fontFamily: 'inter400',
    fontSize: 14,
  },
  input: {
    alignContent: 'flex-end',
    backgroundColor: "#232631",
    borderRadius: 8,
    color: "white",
    height: 40,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  subTitle: {
    color: "white",
    fontFamily: "inter400",
    fontSize: 18,
  },
  category: {
    gap: 12
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: "space-between"
  },
  categoryButton: {
    alignItems: "center",
    borderRadius: 8,
    height: 27,
    justifyContent: "center",
    width: 90
  },
  categoryText: {
    color: "white",
    fontFamily: "inter400",
    fontSize: 12
  },
  btnAdd: {
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.dark.blue,
    height: 36,
    justifyContent: "center",
    width: "100%"
  },
  txtAdd: {
    fontSize: 16,
    fontFamily: "inter400",
  }
});