import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginMessage}>
        You have Successfully Login to App!
      </Text>
      <Image
        source={{
          width: 200,
          height: 200,
          uri: 'https://icons.veryicon.com/png/o/miscellaneous/8atour/submit-successfully.png',
        }}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginMessage: {
    color: 'green',
    marginBottom: 10,
  },
});
