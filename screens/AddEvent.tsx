import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';
const appStyles = require('../App.scss')

const AddEvent = () => {
    const saveEvent = () => {
        console.log("save event")
    }

  return (
    <SafeAreaView style={styles.pageContainer}>
        <View>
            <View style={{marginBottom: 15}}>
                <Text style={[appStyles.bodyCopy, styles.inputLabel]}>Event Name</Text>
                <TextInput style={styles.inputStyle}/>
            </View>
            <View style={{marginBottom: 15}}>
                <Text style={[appStyles.bodyCopy, styles.inputLabel]}>Short Note</Text>
                <TextInput style={[styles.inputStyle]}/>
            </View>
            <View style={{marginBottom: 15}}>
                <Text style={[appStyles.bodyCopy, styles.inputLabel]}>Group</Text>
                <TextInput style={[styles.inputStyle]}/>
            </View>
            <Button title='Save Event' onPress={() => saveEvent()}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    pageContainer: {
        margin: 10
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingLeft:5,
        paddingRight: 5
    },
    inputLabel: {
        marginBottom: 10
    }
})

export default AddEvent;