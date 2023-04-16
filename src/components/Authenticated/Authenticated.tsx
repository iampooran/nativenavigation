import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../Order/Order';
import Details from '../Details/Details';
import Settings from '../Settings/Setting';

const Tab = createBottomTabNavigator();

const Authenticated = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Authenticated;
