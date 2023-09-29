import React from 'react';
import { View } from 'react-native';

import Cart from './Cart';
import Orders from './Orders';
import OrderProvider from './context/OrderProvider';

export default function CarritoScreen() {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <OrderProvider>
        <Cart />
        <Orders />
      </OrderProvider>
    </View>
  );
}
