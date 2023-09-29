import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CardProduct } from './CardProduct';
import OrderButton from './OrderButton';

export default function Cart() {
  const cart = useSelector((state: any) => state.cart.cart);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {cart.map((item: any) => {
          return <CardProduct key={item.id} product={item} />;
        })}

        <OrderButton cart={cart} />
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
