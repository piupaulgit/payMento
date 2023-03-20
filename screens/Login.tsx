import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { login } from '../assets/images';
const appStyles = require('../App.scss')

const smallCircleLeftVal = '-10%';
const smallCircleTopVal = '1%';
const bigCircleLeftVal = '50%';
const bigCircleTopVal = '50%';

const Login = (props:any) => {
  const moveToDashboard = () => {
    props.navigation.navigate('Dashboard')
  }
  return (
    <View style={styles.loginScreen}>
      <View style={styles.smallCircle}/>
      <View style={styles.bigCircle}/>
      <View>
        <View style={styles.loginImage}>
            <Image source={login} style={{width: 178, height: 392}}/>
        </View>
        <Text style={appStyles.h1}>Manage your buddies to calculate</Text>
        <Text style={appStyles.bodyCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
        <Button title='Login With Google' onPress={moveToDashboard}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginScreen: {
    position:'relative',
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  loginImage:{
    display: 'flex',
    alignItems: 'center'
  },
  smallCircle:{
    height: 194,
    width: 194,
    backgroundColor: '#D9D9D9',
    opacity: .2,
    position: 'absolute',
    borderRadius: 194,
    top: smallCircleTopVal,
    left: smallCircleLeftVal
  },
  bigCircle:{
    height: 300,
    width: 300,
    backgroundColor: '#D9D9D9',
    opacity: .2,
    position: 'absolute',
    borderRadius: 194,
    top: bigCircleTopVal,
    left: bigCircleLeftVal
  }
});

export default Login;