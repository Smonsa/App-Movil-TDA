import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet,TouchableOpacity} from 'react-native';


import Layout from '../components/Layout';
import {saveTask, getOneTask, updateTask}from '../api';

const TaskFormScreen = ({navigation, route}) => {
  const [task, setTask] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
  });

const [editing, setEditing] = useState(false);

  useEffect(() => {
    //Esto es para al momento de seleccionar la tarea saber si se debe editar o guardar una nueva
    if (route.params && route.params.id) {
      setEditing(true);
      navigation.setOptions({ headerTitle: "Modificar Tarea" });
      (async () => {
        const task = await getOneTask(route.params.id);
        setTask({ titulo: task.titulo, descripcion: task.descripcion, fecha: task.fecha,  });
      })();
    }
  }, []);

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await saveTask(task);
      } else {
        console.log(route.params.id, task)
        await updateTask(route.params.id, {...task});
      }
      navigation.navigate("Home1")
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  return(
    //contenedores
    <Layout >
    <TextInput style={styles.input} placeholder="Titulo" placeholderTextColor= "#546574" onChangeText={(Text) => handleChange('titulo',Text)} value={task.titulo} /> 

    <TextInput style={styles.input} placeholder="Descripcion" placeholderTextColor= "#546574" onChangeText={(Text) => handleChange('descripcion',Text)} value={task.descripcion}/> 

    <TextInput style={styles.input} placeholder="Fecha" placeholderTextColor= "#546574" onChangeText={(Text) => handleChange('fecha',Text)} value={task.fecha}/> 

    <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
      <Text style={styles.buttonText}> Guardar</Text>
    </TouchableOpacity>
    </Layout>
    );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 35,
    color: '#ffffff',
    textAling: 'center',
    padding: 4,
    borderRadius: 5
  },
  saveButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
})

export default TaskFormScreen;