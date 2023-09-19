import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../services/useFetch';
import ENDPOINTS from '../../utils/endpoints';
import { getProducts } from '../../context/ProductReducer';
import { items } from './products';

export default function ListaProductos() {
  const products = useSelector(state => state.product.product);
  const dispatch = useDispatch();

  ////FUNCIONA, TRAE DATOS DE LA API
  /* const URLGET = (ENDPOINTS.PRODUCTS) 
const {data: items}= useFetch(URLGET) 
console.log(JSON.stringify(items)) */

  //const URLGETIMG = (`https://x-app-api-dev.fl0.io/public/${ENDPOINTS.PRODUCTS}.image`)
  //const {images, loading}= useFetch(URLGETIMG)
  //const {images, loading}= useFetch(URLEJEMPLO)

  useEffect(() => {
    if (products.length > 0) return;

    const fetchProducts = () => {
      items?.map(item => dispatch(getProducts(item)));
    };
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Restaurant Menu</Text>

        {items?.map(item => (
          <CardProduct key={item.id} item={item} />
        ))}
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
  },
});
