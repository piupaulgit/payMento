import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OverView from './OverView';
import Costing from './Costing';
import Ionicons from '@expo/vector-icons/Ionicons';
import Group from './Group';

const Tab = createBottomTabNavigator();

const EventDetail = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

          switch (route.name) {
            case "Over View":
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              break;
              case "Costing":
                iconName = focused ? "ios-list" : "ios-list-outline";
                break;
              case "Group":
                iconName = focused ? "ios-list" : "ios-list-outline";
                break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#45663d",
        tabBarInactiveTintColor: "gray",
      })}
    >
            <Tab.Screen name="Over View" component={OverView} />
            <Tab.Screen name="Group" component={Group}  />
            <Tab.Screen name="Costing" component={Costing}  />
        </Tab.Navigator>
  )
}

export default EventDetail