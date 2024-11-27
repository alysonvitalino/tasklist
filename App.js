import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskCard from './TaskCard.js';
import { useState, useEffect } from 'react';
import { getRequest, deleteRequest, postRequest } from './api/Api.js';



export default function App() {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [task, setTask] = useState([]);
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);



  const onMessage = async () => {

    setAlert1(false);
    setAlert2(false);

    if (taskTitle !== "" && taskDescription.length >= 10) {

      let newTask = await postRequest(taskTitle, taskDescription);
      setTask(newTask)

      setTaskTitle("");
      setTaskDescription("");

    } else {

      if (!taskTitle.trim()) {
        setAlert1(true)
        setTimeout(() => {
          setAlert1(false);
        }, 4000);
      }

      if (taskDescription.length < 10) {
        setAlert2(true)
        setTimeout(() => {
          setAlert2(false);
        }, 4000);
      }
    }

  };

  const deleteTask = (index, id) => {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1);
    deleteRequest(id);
    setTask(updatedTasks);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getRequest();
        setTask(resp)
      } catch (ex) {
        console.error(ex)
      }
    };

    fetchData();
  }, [])

  return (

    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa'
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      {
        alert1
          ?
          <Text style={styles.errorText}>
            Necessário informar o título.
          </Text>
          :
          <></>
      }

      <Text style={styles.label}>Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da Tarefa'
        multiline
        value={taskDescription}
        onChangeText={setTaskDescription}

      />

      {
        alert2
          ? <Text style={styles.errorText}>
            Descrição insuficiente &#40;Min 10 caracteres&#41;.
          </Text>
          : <></>
      }

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.buttonColor} onPress={() => onMessage()}>
         <Text style={styles.buttonText}> Salvar </Text>
        </TouchableOpacity>

      </View>

      {task.length > 0
        ? <View style={styles.separator} />
        : <> </>
      }

      <ScrollView style={styles.scrollHeight}>
        {task.map((item, index) => (
          <TaskCard
            key={item.id}
            title={item.title}
            description={item.description}
            status={"Done"}
            onClick={() => deleteTask(index, item.id)}
          />
        ))}


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#white'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 12,
    marginBottom: 8,
  },
  textArea: {
    height: 50,
    textAlignVertical: 'top',
    flex: 1
  },
  buttonContainer: {
    marginTop: 8
  },
  buttonColor: {
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'blue',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  separator: {
    marginTop: 16,
    width: "100%",
    height: 1,
    backgroundColor: "#222"
  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic"
  },
  scrollHeight: {
    height: 30
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center'
  },
});
