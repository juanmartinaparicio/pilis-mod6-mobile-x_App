import React from 'react';
import { View } from 'react-native';

import Cart from './Cart';
import Orders from './Orders';

export default function CarritoScreen() {
  return (
    <View>
      <Cart />
      <Orders />
    </View>
  );
}
