import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useAppDispatch } from '@/context/redux/hooks';
import {
  ProductCart,
  cleanCart,
} from '@/context/redux/reducers/CarritoReducer';
import generateOrder from '@/services/orders/generateOrder';

type VoidFunction = () => void | Promise<void>;
function showAlert(
  message: string,
  onContinue: VoidFunction = () => {},
  onBack: VoidFunction = () => {},
) {
  Alert.alert(
    'Alerta',
    message,
    [
      {
        text: 'Volver',
        onPress: onBack,
        style: 'destructive',
      },
      {
        text: 'Continuar',
        onPress: onContinue,
      },
    ],
    { cancelable: true },
  );
}

const INIT_TOTAL = 0;

interface Props {
  cart: ProductCart[];
}

export default function OrderButton({ cart }: Props) {
  const dispatch = useAppDispatch();

  const total = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    INIT_TOTAL,
  );

  const onPress = () => {
    const onContinue = () => {
      generateOrder(cart).then(() => {
        dispatch(cleanCart());
      });
    };

    const onBack = () => {
      console.log('order cancel');
    };

    const message = '¿Confirma el pedido?';
    showAlert(message, onBack, onContinue);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>TOTAL ${total}</Text>
        <Text style={styles.btnText}>Realizar la compra</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
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
