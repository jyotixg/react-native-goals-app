import { View, Text, StyleSheet, TouchableOpacity,TouchableHighlight, TouchableNativeFeedback } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10
    }
})


export default GoalItem