import React from 'react'
import { Button, Image, Text, View } from 'react-native';
import { login } from '../assets/images';
const appStyles = require('../App.scss')

const Login = () => {
  return (
    <View>
        <View>
            <Image source={login} style={{width: 134, height: 426}}/>
        </View>
        <Text style={appStyles.h1}>Manage your buddies to calculate</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
        <Button title='Login With Google'/>
    </View>
  )
}

export default Login;