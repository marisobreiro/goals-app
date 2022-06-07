import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";

function GoalInput (props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandle(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onPress(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image 
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput 
                    placeholder='Insira seu objetivo aqui' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandle}
                    value={enteredGoalText}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add goal'
                            color='#CDBE78'
                            style={styles.addGoalBtn}
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel" 
                            color="#AAAAAA"
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#383838',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: '#dddddd' ,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 10,
        color: '#383838',
        height: 40,
        marginBottom: 8,
        padding: 10,
        width: '80%'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        width: '80%'
    },
    button: {
        marginRight: 8
    }
})