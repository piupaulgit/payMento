import React from 'react'
import { View,Text,SafeAreaView, StyleSheet, FlatList, Pressable, Button } from 'react-native'
const appStyles = require('../../App.scss')
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { IMemeber } from '../../interfaces/member';
import Ionicons from '@expo/vector-icons/Ionicons';

const data = {
  tableHead: ['Item', 'Value', 'members', 'spent by', 'Action'],
  tableData: [
    ['Train', '200', '3', '4', '200'],
    ['Hotel', '5000', 'c', 'd', 5000],
    ['Food', '300', '3', '456','300'],
    ['Ticket', '800', 'c', 'd', '800']
  ]
}

const group:IMemeber[] = [
  {
    name: 'Deep',
    mobileNumber: 7897979789797,
    id: '9090'
  },
  {
    name: 'Piu',
    mobileNumber: 898988989,
    id: '9090'
  }
]

const OverView = () => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View>
        <Text style={[appStyles.h2, {marginBottom: 10}]}>Manali Trip</Text>
        <Text style={appStyles.bodyCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea, veniam repellendus nobis saepe illum ullam, excepturi nemo.</Text>
        <View style={{marginTop: 20}}>
          <View style={{marginBottom: 20}}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#201e1fff'}}>
              <Row data={data.tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={data.tableData} textStyle={styles.text}/>
            </Table>
          </View>
          <Button title='Add new Item'/>
        </View>
        <View>
          <Text style={[appStyles.h3, {marginTop: 20, marginBottom: 10}]}>Group</Text>
          <FlatList
            data={group}
            renderItem={({item}) => 
              <View style={styles.eachMember}>
                <Text style={appStyles.bodyCopy}>{item.name}</Text>
                <View>
                  <Pressable>
                    <Ionicons name='trash' size={20}/>
                  </Pressable>
                </View>
              </View>
            }
          />
          <View>
            <Button title='Add new Member'/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
      margin: 10
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#ff4000' },
  text: { margin: 6 },
  eachMember: {
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom:5,
    display: 'flex',
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent:'space-between'
  }
})

export default OverView