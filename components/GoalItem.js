import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#004400'}} /*Propriedade do android quando pressionado exibir uma "aura" em torno do component */
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalItemText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#CDBE78',
        borderRadius: 10,
        marginBottom: 10,
    },
    goalItemText: {
        color: '#383838',
        padding: 10,
    },
    pressedItem: {
        opacity: 0.5,
    }
});