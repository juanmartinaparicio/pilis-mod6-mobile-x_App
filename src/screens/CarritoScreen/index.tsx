import React from 'react';
import { View } from 'react-native';

import Cart from './Cart';
import Orders from './Orders';
import OrderProvider from './context/OrderProvider';

export default function CarritoScreen() {
  return (
    <View>
      <OrderProvider>
        <Cart />
        <Orders />
      </OrderProvider>
    </View>
  );
}
