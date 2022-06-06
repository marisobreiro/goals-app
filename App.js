import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandle(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals, 
            {text: enteredGoalText, id: Math.random().toString()},
        ])
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput onChangeText={goalInputHandle} onPress={addGoalHandler}/>
            <View style={styles.listContainer}>
                <FlatList 
                    alwaysBounceVertical={false}
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return <GoalItem text={itemData.item.text} />
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