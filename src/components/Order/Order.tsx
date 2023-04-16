import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import MOCK_DATA from './MOCK_DATA.json';

const Order = () => {
  const [product] = useState(MOCK_DATA);

  return (
    <ScrollView style={styles.container}>
      {product.map(order => {
        return (
          <View key={order.id} style={styles.container2}>
            <Text style={styles.titletext}>{order.title}</Text>
            <Image
              style={styles.imageproduct}
              source={{
                width: 200,
                height: 200,
                uri: `${order.image}`,
              }}
            />
            <Text style={styles.pricetext}>Price: {order.price}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titletext: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageproduct: {
    borderRadius: 10,
    resizeMode: 'contain',
  },
  container2: {
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pricetext: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
