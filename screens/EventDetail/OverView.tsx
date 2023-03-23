import Checkbox from 'expo-checkbox';
import React from 'react'
import { View,Text,SafeAreaView, StyleSheet, FlatList, Pressable, Button, ScrollView } from 'react-native'
const appStyles = require('../../App.scss')
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { IItem, IStatus } from '../../interfaces/event';

const items:IItem[] = [
  {
    title: 'Train fare',
    value: 400,
    spentBy: 'Deep',
    members: ['Piu','Deep','kunal'],
    date: '12/12/23',
    status: IStatus.OPEN
  },
  {
    title: 'Hotel',
    value: 500,
    spentBy: 'Piu',
    members: ['Piu','Deep','kunal'],
    date: '12/12/23',
    status: IStatus.CLOSED
  },
  {
    title: 'Flight',
    value: 500,
    spentBy: 'Piu',
    members: ['Piu','Deep','kunal'],
    date: '12/12/23',
    status: IStatus.OPEN
  },
  {
    title: 'Food',
    value: 500,
    spentBy: 'Piu',
    members: ['Piu','Deep','kunal'],
    date: '12/12/23',
    status: IStatus.OPEN
  },
]

const OverView = () => {
  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <View style={[styles.eventHeader]}>
          <Text style={[appStyles.h2, {marginBottom: 10}]}>Manali Trip</Text>
          <Button title='Add Item'/>
        </View>
        <Text style={[appStyles.bodyCopy, {marginBottom: 20, marginTop: 10}]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea, veniam repellendus nobis saepe illum ullam, excepturi nemo.</Text>
        <View>
          { items && items.length > 0 && items.map((item:IItem) => {
            return (
                <View style={styles.itemHolder}>
                  <View style={styles.itemHeader}>
                    <View>
                      <Text style={[appStyles.h3, {marginBottom: 0}]}>{item.title}</Text>
                      <Text style={[appStyles.smallText, appStyles.mutedText]}>{item.spentBy}</Text>
                    </View>
                    <View>
                      <Checkbox value={item.status === 'OPEN' ? true : false } color={item.status === 'OPEN' ? '#000' : undefined}/>
                    </View>
                  </View>
                  <View style={styles.itemFooter}>
                    <Text>{item.date}</Text>
                    <View style={styles.membersHolder}>
                      { item.members && item.members.map((member) => {
                        return (
                          <View style={styles.eachMember}>
                            <Text style={styles.memberName}>{member.split('')[0]}</Text>
                          </View>
                        )
                      })
                      }
                    </View>
                  </View>
                </View>
            )
          })
          }
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
      margin: 10
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#ff4000' },
  text: { margin: 6 },
  eventHeader: {
    display: 'flex', 
    justifyContent:'space-between', 
    flexDirection:'row', 
    marginBottom: 10, 
    alignItems:'center'
  },
  itemHolder:{
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom:15,
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#efefef',
    paddingBottom: 10,
    alignItems: 'center'
  },
  itemFooter:{
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  membersHolder: {
    display: 'flex',
    flexDirection: 'row'
  },
  eachMember: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: 20,
    display: 'flex',
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: -5
  },
  memberName:{
    color:'#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 16
  }
})

export default OverView