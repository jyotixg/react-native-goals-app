import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const deleteGoalHandler = (goalId) => {
    console.log(goalId, "goalId");
    setCourseGoals(currentGoals =>
      currentGoals.filter((item) => item.id !== goalId)
    )
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>

      <Button title="Add new goal" onPress={()=>setIsAddMode(true)} />

      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel = {cancelGoalAdditionHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
      />


    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
})