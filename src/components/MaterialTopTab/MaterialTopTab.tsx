import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Details from '../Details/Details';
import Order from '../Order/Order';
import Settings from '../Settings/Setting';

const Tab = createMaterialTopTabNavigator();

const MaterialTopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MaterialTopTab;
