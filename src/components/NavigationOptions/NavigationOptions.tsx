import {View, StyleSheet, Button} from 'react-native';
import React from 'react';

const NavigationOptions = ({navigation}: {navigation: any}) => {
  const handleBottomTab = () => {
    navigation.navigate('Authenticated');
  };

  const handleMaterialBottomTab = () => {
    navigation.navigate('MaterialBottomTab');
  };

  return (
    <View style={styles.container}>
      <Button title="Go To Bottom Tab" onPress={() => handleBottomTab()} />
      <Button
        title="Go To Material Bottom Tab"
        onPress={() => handleMaterialBottomTab()}
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
