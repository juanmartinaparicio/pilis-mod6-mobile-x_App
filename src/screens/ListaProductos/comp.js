import React, { useEffect } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { decrementQty, incrementQty } from './CartReducer';
import MenuItem from './MenuItem';
import {
  decrementQuantity,
  getProducts,
  incrementQuantity,
} from './ProductReducer';

const HomeScreen = () => {
  const products = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  const images = [
    {
      id: '0',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU',
      name: 'Icecream',
      quantity: 0,
    },
    {
      id: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85O96gPiso_j2gaS0cePTBY4mCR3pumV6tw&usqp=CAU',
      name: 'Biscuit',
      quantity: 0,
    },
    {
      id: '2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU',
      name: 'Chocolate',
      quantity: 0,
    },
  ];
  useEffect(() => {
    if (products.length > 0) return;

    const fetchProducts = () => {
      images.map(image => dispatch(getProducts(image)));
    };
    fetchProducts();
  }, []);
  const cart = useSelector(state => state.cart.cart);
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          marginTop: 60,
          color: 'red',
        }}
      >
        Products Page
      </Text>
      {products.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}

      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          marginTop: 60,
          color: 'red',
        }}
      >
        Cart Page
      </Text>
      {cart.map((item, index) => (
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 10 }}>
              {item.name}
            </Text>
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
          </View>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FF3366',
              borderRadius: 5,
              width: 120,
            }}
          >
            <Pressable
              onPress={() => {
                dispatch(decrementQty(item));
                dispatch(decrementQuantity(item));
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: 'white',
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  paddingHorizontal: 10,
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                dispatch(incrementQty(item)); // cart
                dispatch(incrementQuantity(item)); //product
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
