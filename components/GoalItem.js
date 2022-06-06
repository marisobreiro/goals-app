import { Text, View, StyleSheet } from "react-native";

function GoalItem() {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>
                {itemData.item.text}
            </Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#CDBE78',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    goalItemText: {
        color: '#383838'
    }
});