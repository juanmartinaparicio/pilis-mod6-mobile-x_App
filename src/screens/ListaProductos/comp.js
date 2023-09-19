<<<<<<< HEAD
import { StyleSheet, Text, View, ScrollView,Pressable,Image } from "react-native";
import React, { useEffect } from "react";
import MenuItem from "./MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, getProducts, incrementQuantity } from "./ProductReducer";
import { decrementQty, incrementQty } from "./CartReducer";

const HomeScreen = () => {
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const images = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
      name: "Icecream",
      quantity: 0,
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85O96gPiso_j2gaS0cePTBY4mCR3pumV6tw&usqp=CAU",
      name: "Biscuit",
      quantity: 0,
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU",
      name: "Chocolate",
=======
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import MenuItem from './MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  getProducts,
  incrementQuantity,
} from './ProductReducer';
import { decrementQty, incrementQty } from './CartReducer';

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
>>>>>>> develop
      quantity: 0,
    },
  ];
  useEffect(() => {
    if (products.length > 0) return;

    const fetchProducts = () => {
<<<<<<< HEAD
      images.map((image) => dispatch(getProducts(image)));
    };
    fetchProducts();
  }, []);
  const cart = useSelector((state) => state.cart.cart);
=======
      images.map(image => dispatch(getProducts(image)));
    };
    fetchProducts();
  }, []);
  const cart = useSelector(state => state.cart.cart);
>>>>>>> develop
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 18,
<<<<<<< HEAD
          textAlign: "center",
          marginTop: 60,
          color: "red",
        }}
      >




        
=======
          textAlign: 'center',
          marginTop: 60,
          color: 'red',
        }}
      >
>>>>>>> develop
        Products Page
      </Text>
      {products.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}

      <Text
        style={{
          fontSize: 18,
<<<<<<< HEAD
          textAlign: "center",
          marginTop: 60,
          color: "red",
        }}
      >




=======
          textAlign: 'center',
          marginTop: 60,
          color: 'red',
        }}
      >
>>>>>>> develop
        Cart Page
      </Text>
      {cart.map((item, index) => (
        <Pressable
          style={{
            marginHorizontal: 10,
<<<<<<< HEAD
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 10 }}>
=======
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 10 }}>
>>>>>>> develop
              {item.name}
            </Text>
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
          </View>

          <Pressable
<<<<<<< HEAD
            
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FF3366",
=======
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FF3366',
>>>>>>> develop
              borderRadius: 5,
              width: 120,
            }}
          >
<<<<<<< HEAD
            <Pressable  onPress={() => {
                dispatch(decrementQty(item));
                dispatch(decrementQuantity(item));
              }}>
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
=======
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
>>>>>>> develop
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
<<<<<<< HEAD
                  color: "white",
=======
                  color: 'white',
>>>>>>> develop
                  paddingHorizontal: 10,
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>

<<<<<<< HEAD
            <Pressable 
=======
            <Pressable
>>>>>>> develop
              onPress={() => {
                dispatch(incrementQty(item)); // cart
                dispatch(incrementQuantity(item)); //product
              }}
<<<<<<< HEAD
           >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
=======
            >
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
>>>>>>> develop
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

<<<<<<< HEAD
const styles = StyleSheet.create({});
=======
const styles = StyleSheet.create({});
>>>>>>> develop
