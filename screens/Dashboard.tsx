import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import { IMemeber } from '../interfaces/member';
import Ionicons from '@expo/vector-icons/Ionicons';
const appStyles = require('../App.scss')

interface IEventList {
    name: String,
    createdBy: String,
    date: string,
    group: IMemeber[],
    image?: string
}

const eventList:IEventList[] = [
  {
    name: 'Manali',
    createdBy: 'Deep',
    date: '24/12/2021',
    group: [],
    image: 'https://picsum.photos/id/234/100'
  },
  {
    name: 'Coorg',
    createdBy: 'Piu',
    date: '20/11/2022',
    group: [],
    image: 'https://picsum.photos/id/406/100'
  },
]
const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <SafeAreaView>
        <View style={styles.pageContainer}>
          <FlatList
            data={eventList}
            renderItem={({item}) => 
              <View style={styles.eachList}>
                <Image source={{uri: item.image}}
                style={{width: 60, height: 60, borderRadius: 10}} />
                <View>
                  <Text style={appStyles.h3}>{item.name}</Text>
                  <Text style={[appStyles.bodyCopy, appStyles.pb0]}>{item.date}, Created by: {item.createdBy}</Text>
                </View>
              </View>
            }
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={[appStyles.centeredView, styles.modalView]}>
                <Text style={appStyles.h3}>Add new event</Text>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Hide Modal</Text>
                </Pressable>
            </View>
          </Modal>
          <Pressable>
            <Ionicons 
            onPress={() => setModalVisible(true)} 
            name="add-circle-sharp" size={50} 
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
    gap: 15
  },
  addBtn: {
    position: 'relative',
    bottom: 10,
    left: 30
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})

export default Dashboard