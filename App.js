/**
 *
 * @format
 * @flow strict-local
 */

 import React, { useState} from 'react';
 import {
   View,
   TextInput,
   Button,
   StyleSheet,
   Text,
   SafeAreaView,
   FlatList,
   TouchableOpacity
 } from 'react-native';
 
 
 
 const App = () => {
   const [task, setTask] = useState('');
   const [taskList, setTaskList] = useState([]);
 
   const onChange = (text) => {
     setTask(text);
   }
 
   const addTask = () => {
     setTaskList([...taskList, {id: Math.random() , task}]);
     setTask('');
   }
 
   const deteleTask = (id) => {
     setTaskList(taskList.filter(task => task.id !== id));
   }
 
   console.warn(taskList);
 
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.formContainer}>
         <TextInput 
           autoFocus
           style={styles.textInput} 
           placeholder='introduzca su informacion'
           onChangeText={(text) => onChange(text)}
           value={task}
         />
         <Button
           onPress={() => addTask()}
           title='Send'
           color='#ec407a'
           disabled={task.trim().length === 0}
           />
       </View>
         <View style={styles.taskListContainer}>
           <Text style={styles.taskListTitle}></Text>
           {taskList.length > 0 ? (
             <FlatList
               keyExtractor={(item) => item.id.toString()}
               refreshing={true}
               data={taskList}
               renderItem={({item}) => (
                 <View>
                   <Text style={styles.textList}>{item.task}</Text>
                   <TouchableOpacity onPress={() => deteleTask(item.id)}>
                     <Text style={styles.delete}>X</Text>
                   </TouchableOpacity>
                 </View>
               )}
             />
           ) : (
             <Text>sin info</Text>
           )}
         </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   formContainer: {
     flexDirection: 'row', 
     padding: 20,
     justifyContent: 'space-around',
     alignItems: 'center',
   },
   textInput : {
     flex: 0.8,
     borderBottomWidth: 1, 
     borderBottomColor: '#ec407a',
   },
   taskListTitle: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#000000',
   },
   taskListContainer: {
     paddingHorizontal: 40,
     marginTop: 10,
 
   },
   textList: {
     padding: 50,
     marginVertical: 20,
     backgroundColor: '#ec407a',
     fontSize: 30,
   },
   delete: {
     backgroundColor: 'red',
     width: 20,
     height: 20,
     margin: 10,
     color: '#ffffff',
   }
 });
 
 export default App;
 