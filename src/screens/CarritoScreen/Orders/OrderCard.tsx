import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import useOrderContext from '../context/useOrderContext';

import { Detail, Order } from '@/services/orders/types';

interface Props {
  order: Order;
  selectDetail: (detail: Detail[]) => void;
}

export default function OrderCard({ order, selectDetail }: Props) {
  const { refreshOrder } = useOrderContext();
  const refresh = () => refreshOrder(order.id);
  const viewDetail = () => selectDetail(order.detail);

  return (
    <TouchableOpacity onPress={refresh} onLongPress={viewDetail}>
      <Text>{order.id}</Text>
      <Text>{order.code}</Text>
      <Text>{order.status}</Text>
    </TouchableOpacity>
  );
}
