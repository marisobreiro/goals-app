import { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals, 
            {text: enteredGoalText, id: Math.random().toString()},
        ])
    };

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            <Button 
                title='Add new goal' 
                color="#CDBE78" 
                onPress={startAddGoalHandler} />
            <GoalInput onPress={addGoalHandler} showModal={modalIsVisible} />
            <View style={styles.listContainer}>
                <FlatList 
                    alwaysBounceVertical={false}
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return ( 
                            <GoalItem 
                                text={itemData.item.text} 
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler} /> )
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                >
                </FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#383838',
        paddingTop: 80,
        paddingHorizontal: 16,
    }
})