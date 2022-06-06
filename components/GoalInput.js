function GoalInput () {
    return (
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
    )
}

export default GoalInput;

const styles = StyleSheet.create({
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
    }
})