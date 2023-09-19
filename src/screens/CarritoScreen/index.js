import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CardProduct } from './CardProduct';
import { getProducts } from '../../context/ProductReducer';
import { useTicketContext } from '../../context/TicketContext';
import { useFetch } from '../../hooks/useFetch';
import generateOrder from '../../services/orders/generateOrder';
import ENDPOINTS from '../../utils/endpoints';
import { items } from '../ListaProductos/products';

export default function CarritoScreen() {
  const { setTicket } = useTicketContext();
  const products = useSelector(state => state.product.product);
  const dispatch = useDispatch();

  /* useEffect(() => {
  if (products.length > 0) return;

  const fetchProducts = () => {
    items.map((item) => dispatch(getProducts(item)));
  };
  fetchProducts();
}, []); */
  const cart = useSelector(state => state.cart.cart);

  //console.log(JSON.stringify(cart))

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {cart.map(item => {
          return <CardProduct key={item.id} item={item} />;
        })}

        <TouchableOpacity
          onPress={() => {
            const cartList = cart.map(
              ({ image, name, ordered, likes, price, ...item }) => item,
            );
            generateOrder(cartList).then(res => {
              res.status;
              console.log(res);
              if (res.result != null) {
              }
            });

            /* clean() */
          }}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Realizar la compra</Text>
          </View>
        </TouchableOpacity>
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
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#de8744',
    borderColor: '#fff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000',
  },
});
