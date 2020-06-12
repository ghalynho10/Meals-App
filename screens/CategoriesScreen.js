import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const CategoriesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The categories Screen!</Text>
            <Button title="Go to Meals" onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals' })
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

export default CategoriesScreen
