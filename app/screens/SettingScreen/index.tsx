import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    
}

const SettingScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Setting!</Text>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
