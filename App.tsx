import { StyleSheet, View } from 'react-native';
import Login from './screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';
import AddEvent from './screens/AddEvent';
import EventDetail from './screens/EventDetail/EventDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OverView from './screens/EventDetail/OverView';
import Costing from './screens/EventDetail/Costing';

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Add Event" component={AddEvent} /> */}
        <Stack.Screen name="Event Detail" component={EventDetail} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
