import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CardProduct } from './CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../services/useFetch';
import ENDPOINTS from '../../utils/endpoints';
import { getProducts } from '../../context/ProductReducer';
import { items } from './products'



export default function ListaProductos() {

  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  

  /* const [data, setData] = useState();

  useEffect(()=>{
    fetch(URLGET)
    .then(products=>products.json())
    .then(data=>setData(data))
  },[]) */
////FUNCIONA, TRAE DATOS DE LA API 
const URLGET = (ENDPOINTS.PRODUCTS) 
const URLEJEMPLO = 'https://fakestoreapi.com/products'
const {data}= useFetch(URLEJEMPLO)
//const {items, loading}= useFetch(URLGET) 
console.log(JSON.stringify(data))   
 

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
const cart = useSelector((state) => state.cart.cart);
 

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>Restaurant Menu</Text>
        
        {/* {loading&& <View><Text>Loading.....</Text></View>}  */}
        {items.map((item ) => {
          return (
            <CardProduct key={item.productId} item={item}/>
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