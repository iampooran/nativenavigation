import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../Order/Order';
import Details from '../Details/Details';
import Settings from '../Settings/Setting';
import Icon from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

const MyIcon = () => {
  return <Icon name="star" color="black" size={30} />;
};

const Authenticated = () => {
  return (
    <Tab.Navigator
      initialRouteName="Details"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: MyIcon,
        }}
      />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Authenticated;
