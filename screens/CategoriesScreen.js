import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CategoriesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The categories Screen!</Text>
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
