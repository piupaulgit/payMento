import React from "react";
import { Button, Pressable, StyleSheet } from "react-native";
import { FlatList, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IMemeber } from "../../interfaces/member";
const appStyles = require("../../App.scss");

const group: IMemeber[] = [
  {
    name: "Deep",
    mobileNumber: 7897979789797,
    id: "9090",
  },
  {
    name: "Piu",
    mobileNumber: 898988989,
    id: "9090",
  },
];

const Group = () => {
  return (
    <View style={styles.container}>
      <Text style={[appStyles.h3, { marginTop: 10, marginBottom: 10 }]}>
        Group
      </Text>
      <FlatList
        data={group}
        renderItem={({ item }) => (
          <View style={styles.eachMember}>
            <Text style={appStyles.bodyCopy}>{item.name}</Text>
            <View>
              <Pressable>
                <Ionicons name="trash" size={20} />
              </Pressable>
            </View>
          </View>
        )}
      />
      <View>
        <Button title="Add new Member" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    eachMember: {
        backgroundColor: "#fff",
        borderRadius: 3,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-between",
    },
});

export default Group;
