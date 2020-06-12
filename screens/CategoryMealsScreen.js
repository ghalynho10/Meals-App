import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
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
