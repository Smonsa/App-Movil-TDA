import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab =  createBottomTabNavigator();
const Stack =  createNativeStackNavigator();

const App = () => {
  return(


    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen 
        name="Home" 
        component={HomeStackTasks}
        options={{ headerShown: false }}
         />
        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
        title: 'Ajustes' ,
          headerStyle: { backgroundColor: "#222f3e"},
         headerTitleStyle: {color:'#ffffff'}
         
       }} />
        
      </Tab.Navigator>

      
    </NavigationContainer>

    
    )
}

const HomeStackTasks = () =>{
  return(
 


<Stack.Navigator> 
  <Stack.Screen

        name="Home1" 
        component={HomeScreen}
         options={({ navigation }) => ({
          title: 'Tareas' ,
          headerStyle: { backgroundColor: "#222f3e"},
         headerTitleStyle: {color:'#ffffff'},
         headerRight: () =>( 
          <TouchableOpacity
          onPress={ () => navigation.navigate("Tasks")} >
          <Text style={{color: '#ffffff', marginRight: 20, fontSize: 30}} >+</Text>
          </TouchableOpacity>
         ),
       })} />
      <Stack.Screen 
      name="Tasks" 
      component={TaskFormScreen}
      options={{
        title: 'Nueva Tarea' ,
          headerStyle: { backgroundColor: "#222f3e"},
         headerTitleStyle: {color:'#ffffff'},
         headerTintColor: '#ffffff'

       }}/>
      </Stack.Navigator>   
    
    )
}

export default App;