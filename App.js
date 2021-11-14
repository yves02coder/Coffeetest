import React, {useState} from 'react';
import Coffee from "./components/Coffee";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (

      <View style={styles.container}>
          <TextInput style={styles.input} placeholder={'Quoi de neuf ?'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Publier</Text>
            </View>
          </TouchableOpacity>


        <ScrollView
            contentContainerStyle={{
              flexGrow: 1
            }}
            keyboardShouldPersistTaps='handled'
        >


          <View style={styles.tasksWrapper}>

            <View style={styles.items}>

              {
                taskItems.map((item, index) => {
                  return (
                      <TouchableOpacity >
                        <Coffee text={item} />

                      </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>

        </ScrollView>


      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor:"#CCCCCC",
    alignItems:'center',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginTop: 15
  },
  addWrapper: {
    width: 80,
    height: 50,
    backgroundColor: 'yellow',
    marginTop: 10,
    marginLeft: 100,
   alignItems:"center",


    justifyContent: 'center',

    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
});
