import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

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
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Insira seu objetivo aqui' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandle}
                />
                <Button 
                    title='Add goal'
                    color='#066163'
                    style={styles.addGoalBtn}
                    onPress={addGoalHandler}
                />
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    alwaysBounceVertical={false}
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.goalItem}>
                                <Text style={styles.goalItemText}>
                                    {itemData.item.text}
                                </Text>
                            </View>
                        );
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
        paddingHorizontal: 16
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 10,
        color: '#F2F2F2',
        height: 40,
        marginRight: 8,
        padding: 10,
        width: '75%'
    },
    listContainer: {
    },
    goalItem: {
        backgroundColor: '#CDBE78',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    goalItemText: {
        color: '#383838'
    }
})