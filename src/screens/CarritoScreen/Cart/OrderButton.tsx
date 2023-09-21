import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

  const showAlert = ()=>{
    Alert.alert(
        'Alerta',
        'Confirma el pedido?',
        [
          {
            text: 'Volver',
            onPress: () => {order},
            style: 'destructive',
          },              
          { text: 'Continuar',
           onPress: () => console.log('Yes Pressed') },
          
        ],
        { cancelable: true }
        //clicking out side of alert will not cancel
      );
    };

    console.log(cart);
    
    const getTotal =()=> {
      let total=0;
      cart.map((item: any) => {total= total+ item.quantity* item.price
      });
      return total;
      
    }; 




  return (
    <TouchableOpacity 
      onPress={showAlert}
      >
      
      <View style={styles.btn}>
        <Text style={styles.btnText}>TOTAL ${getTotal()}</Text>
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
