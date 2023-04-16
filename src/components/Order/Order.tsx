import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const demoOrder = [
  {
    id: 0,
    title: 'Denim Shirt',
    img: 'https://5.imimg.com/data5/MX/XG/MY-78308246/mens-denim-full-sleeve-shirt-500x500.jpg',
    desc: 'Denim Shirt Blue',
    price: 50,
  },
];

const Order = () => {
  return (
    <View style={styles.container}>
      {demoOrder.map(order => {
        return (
          <View style={styles.container2}>
            <Text style={styles.titletext}>{order.title}</Text>
            <Image
              style={styles.imageproduct}
              source={{
                width: 200,
                height: 200,
                uri: 'https://images.wallpapersden.com/image/wxl-gradient-landscape-4k-illustration_89880.jpg',
              }}
            />
            <Text style={styles.pricetext}>Price: {order.price}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  titletext: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageproduct: {
    borderRadius: 10,
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
