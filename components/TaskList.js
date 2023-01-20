import React , {useEffect, useState} from 'react';
import {FlatList,  SafeAreaView, Alert, RefreshControl} from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import TaskItem from './TaskItem';
import {getTasks, deleteTask} from '../api';

const TaskList = () =>{

    const [tasks, setTasks]= useState([])
    const [refreshing, setRefreshing] = useState(false);

    const isFocused = useIsFocused();

  const loadTasks = async () => {
    const data = await getTasks();
    console.log("listo");
    setTasks(data);
  }

  useEffect(() =>{
    loadTasks();
  }, [isFocused]);

  //Pasar funciones entre paginas
    const renderItem = ({ item }) => {
        return<TaskItem task={item} handleDelete={handleDelete} />; 
    };

    //Actualizacion de las tareas
    const onRefresh = React.useCallback( async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    })

    const handleDelete = async (id) => {
    Alert.alert("Borrar Tarea", "¿Quieres borrar la tarea?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: async () => {
          await deleteTask(id);
          await loadTasks();
        },
      },
    ]);
  };


    return(
        <FlatList
        style= {{width: '100%'}}
        data= {tasks}
        keyExtractor={(item) => item.id + ' '}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors ={["#78e08f"]}
           progressBackgroundColor="#0a3d62"
        />
        }
      />
        );
};

export default TaskList;
