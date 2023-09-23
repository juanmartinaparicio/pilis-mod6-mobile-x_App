import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Detail } from '@/services/orders/types';

interface Props {
  detail: Detail[];
  selectDetail: (detail: Detail[] | null) => void;
}
export default function OrderDetail({ detail, selectDetail }: Props) {
  const resetView = () => selectDetail(null);
  return (
    <TouchableOpacity onPress={resetView}>
      {detail.map(product => {
        return (
          <View key={product.id}>
            <Text>{product.description}</Text>
          </View>
        );
      })}
    </TouchableOpacity>
  );
}
