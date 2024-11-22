import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import TaskCard from './TaskCard.js';


export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa' />

      <Text style={styles.label}>Tarefa Descrição</Text>
      <TextInput style={[styles.input, styles.textArea]} placeholder='Descrição da Tarefa'
        multiline />

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.buttonColor}> 
          Salvar 
        </TouchableOpacity>

         </View>

         <TaskCard 
         title={"Teste"}
         desc={"Descrição Teste"}
         status={"Done"}
         onClick={()=>{
          alert("Deletar")
         }}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#008B8B'
  },
  label: {
    fontSize: 24  ,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
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
  buttonColor : {
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'blue',
    alignItems: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
