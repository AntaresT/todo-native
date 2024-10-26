import { StyleSheet, View, Text, FlatList, Modal, TouchableOpacity } from 'react-native';

import { useTodoProvider } from '@/providers/todoProvider';
import Task from '@/components/Task';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import Button from '@/components/Button';

export default function TabTwoScreen() {

  const {todoTask, setMood} = useTodoProvider()

  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleSetMood = (moodSelected: string) => {
    console.log(moodSelected, "mood")
    setMood(moodSelected)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas para hoje</Text>
      {todoTask && todoTask.find(item => !item.isCompleted) ?
        <FlatList
        data={todoTask.filter(task => !task.isCompleted)}
        keyExtractor={item => item.id.toString()}
        renderItem={(task) => (
          <View style={{ marginBottom: 10 }}>
            <Task 
            id={task.item.id} 
            title={task.item.title} 
            isCompleted={task.item.isCompleted} 
            category={task.item.category}
            description={task.item.description}
          />
          </View>
        )}
        />
        :
        <></>
      }
      {
        todoTask.find(item => item.isCompleted === true) ? 
        <View>
          <View>
            <Text style={styles.text}>Concluídas</Text>
          </View>
          <FlatList
            data={todoTask.filter(task => task.isCompleted)}
            keyExtractor={item => item.id.toString()}
            renderItem={(task) => (
              <View style={{ marginBottom: 10 }}>
                <Task 
                id={task.item.id} 
                title={task.item.title} 
                isCompleted={task.item.isCompleted} 
                category={task.item.category}
                description={task.item.description}
              />
              </View>
            )}
          />
        </View>
        :
        <></>
      }
      {todoTask.find(item => item.isCompleted) ? 
        <Button text='Concluir dia' onClick={() => console.log(setDialogOpen(!isDialogOpen))} />
        :
        <></>
      }
        <Modal
        animationType="slide"
        transparent={true}
        visible={isDialogOpen}
        onRequestClose={() => setDialogOpen(!isDialogOpen)}
      >
        <TouchableOpacity style={styles.dialog} onPressOut={() => setDialogOpen(!isDialogOpen)}>
          <View style={styles.contentDialog}>
            <Text style={styles.titleDialog}>Como que foi o seu dia?</Text>
            <Button text='Ruim' color={Colors.dark.red} onClick={() => {handleSetMood("bad")}} />
            <Button text='Mediano' color={Colors.dark.yellow} onClick={() => {handleSetMood("medium")}} />
            <Button text='Prestativo' color={Colors.dark.green} onClick={() => {handleSetMood("good")}} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.bgScreen,
    gap: 30,
    height: "100%",
    padding: 41,
    width: "100%",
  },
  title: {
    fontFamily: "inter400",
    fontSize: 24,
    marginTop: 40,
    color: "white"
  },
  dialog:{
    height: "40%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.dark.darkBlue,
    borderRadius: 10,
  },
  contentDialog: {
    justifyContent: "center",
    padding: 55,
    width: "100%"
  },
  titleDialog: {
    fontFamily: "inter400",
    fontSize: 24,
    color: "white"
  },
  text: {
    fontFamily: "inter400",
    fontSize: 18,
    color: "white",
    marginBottom: 10
  }
});
