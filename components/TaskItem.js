import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const TaskItem = ( { task, handleDelete } ) =>{
    const navigation = useNavigation();
    return(
        //botones de tarea
      <View style={styles.itemContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Tasks", { id: task.id })}
      >
        <Text style={styles.itemTitle}>{task.fecha}</Text>
        <Text style={styles.itemTitle}>{task.titulo}</Text>
        <Text style={styles.itemTitle}>{task.descripcion}</Text>
      </TouchableOpacity>

       <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(task.id)}
      >
        <Text style={{ color: "#fff" }}>Delete</Text>
      </TouchableOpacity>
      
      </View>
        );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#333333",
        padding: 20,
        marginVertical: 8,
         flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
    },
    itemTitle: {
        color: "#ffffff"
    }
});

export default TaskItem;
