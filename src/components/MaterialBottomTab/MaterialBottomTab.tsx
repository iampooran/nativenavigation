import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Details from '../Details/Details';
import Settings from '../Settings/Setting';
import Order from '../Order/Order';
import Icon from 'react-native-vector-icons/EvilIcons';

const Tab = createMaterialBottomTabNavigator();

const MyIcon = () => {
  return <Icon name="star" size={30} />;
};

const MaterialBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="black"
      barStyle={{backgroundColor: 'skyblue'}}>
      <Tab.Screen
        name="Feed"
        component={Details}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: MyIcon,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Order}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: MyIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: MyIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default MaterialBottomTab;
