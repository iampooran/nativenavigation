import {View, Button, StyleSheet} from 'react-native';
import React from 'react';

const Settings = ({navigation}: {navigation: any}) => {
  const handleLogOut = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={() => handleLogOut()} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
