import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'
import {Vars} from '../Vars.js'

function WelcomeScreen(props) {
    return (
        <View style={styles.background}>
            <Text style={styles.text}>Welcome</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        font: 'Poppins',
        fontSize: 25,
        color: Vars.color_text,
    },
})

export default WelcomeScreen;