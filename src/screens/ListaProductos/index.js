import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, } from 'react-native';

import { items } from './products'
import { useFetch } from '../../services/useFetch';
import ENDPOINTS from '../../utils/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../context/ProductReducer';
import { CardProduct } from './CardProduct';



export default function ListaProductos() {

  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  

////FUNCIONA, TRAE DATOS DE LA API 
//const URLGET = (ENDPOINTS.PRODUCTS) 
const URLEJEMPLO = 'https://fakestoreapi.com/products'
//const {data}= useFetch(URLEJEMPLO)
//const {data, loading}= useFetch(URLGET)
// console.log(data)  
 

const URLGETIMG = (`https://x-app-api-dev.fl0.io/public/${ENDPOINTS.PRODUCTS}.image`) 
/* const {images, loading}= useFetch(URLGETIMG)
const {images, loading}= useFetch(URLEJEMPLO)
 */

useEffect(() => {
  if (products.length > 0) return;

  const fetchProducts = () => {
    items.map((item) => dispatch(getProducts(item)));
  };
  fetchProducts();
}, []);



  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Restaurant Menu</Text>
        
        {/* {loading&& <View><Text>Loading.....</Text></View>} */}
        {items.map((/* {  image, label, ordered, likes, price  } */item , index) => {
          return (
            <CardProduct key={item.id} item={item}/>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  }})