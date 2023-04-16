import {Text, View, StyleSheet, Button} from 'react-native';
import React from 'react';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Authenticated')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
