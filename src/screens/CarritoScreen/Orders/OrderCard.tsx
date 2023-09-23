import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import useOrderContext from '../context/useOrderContext';

import { Detail, Order } from '@/services/orders/types';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

interface Props {
  order: Order;
  selectDetail: (detail: Detail[]) => void;
}

export default function OrderCard({ order, selectDetail }: Props) {
  const { refreshOrder } = useOrderContext();
  const refresh = () => refreshOrder(order.id);
  const viewDetail = () => selectDetail(order.detail);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody} /* onPress={refresh} onLongPress={viewDetail} */>
          <Text style={styles.cardTitle}>{order.id}</Text>
          <Text style={styles.cardCategory}>{order.code}</Text>
          <Text style={styles.cardPrice}>{order.status}</Text>
        </View>
      </View>
    </View>
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
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#131313',
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7f7f7f',
  },
  cardPrice: {
    marginLeft: 'auto',
    fontSize: 17,
    fontWeight: '700',
    color: '#2c9d3b',
  },
});