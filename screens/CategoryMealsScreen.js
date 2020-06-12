import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.push('MealDetail')
            }} />
            <Button title="GO Back" onPress={() => {
                props.navigation.goBack()
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryMealsScreen
