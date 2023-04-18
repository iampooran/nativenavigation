import {View, StyleSheet, Button} from 'react-native';
import React from 'react';

const NavigationOptions = ({navigation}: {navigation: any}) => {
  const handleBottomTab = () => {
    navigation.navigate('Authenticated');
  };

  const handleMaterialBottomTab = () => {
    navigation.navigate('MaterialBottomTab');
  };
  const handleMaterialTopTab = () => {
    navigation.navigate('MaterialTopTab');
  };

  const handleDrawerNavigate = () => {
    navigation.navigate('DrawerNavigate');
  };

  return (
    <View style={styles.container}>
      <Button title="Go To Bottom Tab" onPress={() => handleBottomTab()} />
      <Button
        title="Go To Material Bottom Tab"
        onPress={() => handleMaterialBottomTab()}
      />
      <Button
        title="Go To MaterialTopTab"
        onPress={() => handleMaterialTopTab()}
      />
      <Button
        title="Go To DrawerNavigate"
        onPress={() => handleDrawerNavigate()}
      />
    </View>
  );
};

export default NavigationOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
