import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useAppDispatch, useAppSelector } from '@/context/redux/hooks';
import {
  addToCart,
  decrementQty,
  incrementQty,
} from '@/context/redux/reducers/CarritoReducer';
import { Product } from '@/services/products/types';

interface Props {
  product: Product;
}

export default function CartOption({ product }: Props) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart.cart);

  const cartProduct = cart.filter((p: any) => p.id === product.id)[0];
  const isProductInCart = cart.some(
    (productCart: any) => productCart.id === product.id,
  );

  const increment = () => dispatch(incrementQty(product));
  const decrement = () => dispatch(decrementQty(product));
  const add = () => dispatch(addToCart(product));

  if (!product) return;

  return (
    <View>
      {isProductInCart ? (
        <View style={styles.container}>
          <TouchableOpacity onPress={increment} style={styles.cardAction}>
            <FeatherIcon color='#fff' name='plus' size={24} />
          </TouchableOpacity>

          <Text style={styles.quantityLabel}>{cartProduct.quantity}</Text>

          <TouchableOpacity onPress={decrement} style={styles.cardAction}>
            <FeatherIcon color='#fff' name='minus' size={24} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={add} style={styles.cardActionM}>
          <FeatherIcon color='#fff' name='plus' size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityLabel: {
    marginVertical: 2,
  },
  cardAction: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    backgroundColor: '#ff9801',
  },
  cardActionM: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: '#ff9801',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 14,
  },
});
