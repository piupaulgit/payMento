import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { IEventList, IStatus } from '../interfaces/event';
const appStyles = require('../App.scss')

const eventList:IEventList[] = [
  {
    name: 'Manali',
    createdBy: 'Deep',
    date: '24/12/2021',
    group: [],
    image: 'https://picsum.photos/id/234/100',
    status: IStatus.ONGOING
  },
  {
    name: 'Coorg',
    createdBy: 'Piu',
    date: '20/11/2022',
    group: [],
    image: 'https://picsum.photos/id/406/100',
    status: IStatus.COMPLETED
  },
]
const Dashboard = (props:any) => {
  const moveToAddEventPage = () => {
    props.navigation.navigate('Add Event')
  }

  const moveToDetailPage = () => {
    props.navigation.navigate('Event Detail')
  }
  return (
    <SafeAreaView>
        <View style={styles.pageContainer}>
          <FlatList
            data={eventList}
            renderItem={({item}) => 
              <Pressable onPress={() => moveToDetailPage()}>
                <View style={styles.eachList}>
                  <View style={[styles.status, item.status === "ONGOING" ? {backgroundColor: 'red'}: {backgroundColor: 'green'}]}></View>
                  <Image source={{uri: item.image}}
                  style={{width: 60, height: 60, borderRadius: 10}} />
                  <View>
                    <Text style={appStyles.h3}>{item.name}</Text>
                    <Text style={[appStyles.bodyCopy, appStyles.pb0]}>{item.date}, Created by: {item.createdBy}</Text>
                  </View>
                </View>
              </Pressable>
            }
          />
          <Pressable>
            <Ionicons 
            name="add-circle-sharp" size={50} 
            onPress={() => moveToAddEventPage()}
            style={[appStyles.colorMoonstone, styles.addBtn]}/>
          </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pageContainer:{
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15
  },
  eachList: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    gap: 15,
    position: 'relative'
  },
  addBtn: {
    position: 'relative',
    bottom: 10,
    left: 30
  },
  status:{
    height:10,
    width:10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 10
  }
})

export default Dashboard