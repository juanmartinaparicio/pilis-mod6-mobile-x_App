import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { cleanCart } from '@/context/redux/reducers/CarritoReducer';
import generateOrder from '@/services/orders/generateOrder';
import { ProductCart } from '@/services/orders/types';

interface Props {
  cart: ProductCart[];
}

export default function OrderButton({ cart }: Props) {
  const dispatch = useDispatch();

  const order = () => {
    generateOrder(cart).then(res => {
      console.log(res);
      dispatch(cleanCart());
    });
  };

  return (
    <TouchableOpacity onPress={order}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Realizar la compra</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
