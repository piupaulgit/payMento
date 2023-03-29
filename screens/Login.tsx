import React, { useEffect } from 'react'
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { login } from '../assets/images';
import { initializeApp } from 'firebase/app';
import * as firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, getRedirectResult } from 'firebase/auth'
import * as GoogleAuthentication from 'expo-google-app-auth';
const appStyles = require('../App.scss')

const smallCircleLeftVal = '-10%';
const smallCircleTopVal = '1%';
const bigCircleLeftVal = '50%';
const bigCircleTopVal = '50%';

const firebaseConfig = {
  apiKey: "AIzaSyBp_z7UBsgtV6kqet26sOJV-qvFUGPp51g",
  authDomain: "paymento-72b1c.firebaseapp.com",
  projectId: "paymento-72b1c",
  storageBucket: "paymento-72b1c.appspot.com",
  messagingSenderId: "1079450988056",
  appId: "1:1079450988056:web:6ecb03f5e3d7633a7c1d6d",
  measurementId: "G-L8PSHBBKY1"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIRESTORE_DB = getFirestore(FIREBASE_APP)
const auth = getAuth(FIREBASE_APP)
const provider = new GoogleAuthProvider();

const Login = (props:any) => {
  const moveToDashboard = () => 
    GoogleAuthentication.logInAsync({
        androidStandaloneAppClientId: '1079450988056-rgigurp75qpqvdl92gud4hst6nfq6mlp.apps.googleusercontent.com',
        iosStandaloneAppClientId: '1079450988056-5p7f0no2m3jcb2l3jg7lv704dk07hg2o.apps.googleusercontent.com',
        scopes: ['profile', 'email']
    })
        .then((logInResult) => {
            if (logInResult.type === 'success') {
                const { idToken, accessToken } = logInResult;
                const credential = firebase.default.auth.GoogleAuthProvider.credential(
                    idToken,
                    accessToken
                );
                const user = firebase.default.auth().signInWithCredential(credential)
                console.log(user,'user')

                // return firebase.default.auth().signInWithCredential(credential);
                // Successful sign in is handled by firebase.auth().onAuthStateChanged
            }
            return Promise.reject(); // Or handle user cancelation separatedly
        })
        .catch((error) => {
            // ...
        });
  return (
    <View style={styles.loginScreen}>
      <View style={styles.smallCircle}/>
      <View style={styles.bigCircle}/>
      <View>
        <View style={styles.loginImage}>
            <Image source={login} style={{width: 178, height: 392, marginBottom: 30}}/>
        </View>
        <Text style={[appStyles.h1, {marginBottom: 10}]}>Manage your buddies to calculate</Text>
        <Text style={[appStyles.bodyCopy, {marginBottom: 25}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
        <Pressable onPress={moveToDashboard} style={[appStyles.button, appStyles.bgBlack]}>
          <Text style={[appStyles.buttonText, appStyles.textBlack]}>Login With Google</Text>
        </Pressable>
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