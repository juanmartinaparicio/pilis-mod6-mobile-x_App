<<<<<<< HEAD
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, incrementQty } from "./CartReducer";
import { decrementQuantity, incrementQuantity } from "./ProductReducer";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item)); // cart array being used
    dispatch(incrementQuantity(item)); // product array being used
  };
  const cart = useSelector((state) => state.cart.cart);


  
=======
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQty, incrementQty } from './CartReducer';
import { decrementQuantity, incrementQuantity } from './ProductReducer';

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemToCart = item => {
    dispatch(addToCart(item)); // cart array being used
    dispatch(incrementQuantity(item)); // product array being used
  };
  const cart = useSelector(state => state.cart.cart);

>>>>>>> develop
  return (
    <View style={{ marginTop: 40 }}>
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

<<<<<<< HEAD
        {cart.some((value) => value.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FF3366",
=======
        {cart.some(value => value.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FF3366',
>>>>>>> develop
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
<<<<<<< HEAD
                  color: "white",
=======
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

            <Pressable
<<<<<<< HEAD
             onPress={() => {
              dispatch(incrementQty(item)); // cart
              dispatch(incrementQuantity(item)); //product
            }}
             
=======
              onPress={() => {
                dispatch(incrementQty(item)); // cart
                dispatch(incrementQuantity(item)); //product
              }}
>>>>>>> develop
            >
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
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable onPress={() => addItemToCart(item)}>
            <Text
              style={{
<<<<<<< HEAD
                borderColor: "gray",
=======
                borderColor: 'gray',
>>>>>>> develop
                borderWidth: 1,
                marginVertical: 10,
                padding: 5,
              }}
            >
              ADD TO CART
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default MenuItem;

<<<<<<< HEAD
const styles = StyleSheet.create({});
=======
const styles = StyleSheet.create({});
>>>>>>> develop
