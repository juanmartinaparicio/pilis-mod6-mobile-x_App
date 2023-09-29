import { Foundation } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import useOrderContext from '../../context/useOrderContext';

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
    <View style={styles.card}>
      <Pressable onPress={refresh}>
        <Foundation name='refresh' color='#ff9801' size={30} />
      </Pressable>
      <View>
        <Text style={styles.cardCode}>{order.code}</Text>
        <Text style={styles.cardStatus}>{order.status}</Text>
      </View>
      <Pressable onPress={viewDetail}>
        <Foundation name='list' color='#ff9801' size={30} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardCode: {
    fontSize: 20,
    fontWeight: '500',
    color: '#7f7f7f',
  },
  cardStatus: {
    marginLeft: 'auto',
    fontSize: 15,
    fontWeight: '700',
    color: '#2c9d3b',
  },
});
