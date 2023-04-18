import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}: {navigation: any}) => {
  const [userName, setUserName] = useState('name');
  const [password, setPassword] = useState('password');
  const [isValid, setIsValid] = useState(true);

  const handleLogin = () => {
    if (userName.length === 0 || password.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      navigation.navigate('Authenticated');
    }
  };

  return (
    <View style={styles.container}>
      {isValid === false && (
        <Text style={styles.errorText}>Please Fill the Input</Text>
      )}
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Email"
        onChangeText={newText => setUserName(newText)}
        defaultValue={userName}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
      />
      <Button title="Login" onPress={() => handleLogin()} />
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
  textInputStyle: {
    marginBottom: 10,
    height: 40,
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Home;
