import { useState } from 'react';
import { Text, View } from 'react-native';

import OrderCard from './OrderCard';
import OrderDetail from './OrderDetail';
import useOrderContext from '../context/useOrderContext';

import { Detail } from '@/services/orders/types';

export default function Orders() {
  const { isLoading, orders } = useOrderContext();
  const [detail, setDetail] = useState<Detail[] | null>(null);
  return (
    <View>
      {isLoading && <Text>cargando...</Text>}
      <View>
        {orders.map(order => (
          <OrderCard key={order.id} order={order} selectDetail={setDetail} />
        ))}
      </View>
      {detail && <OrderDetail detail={detail} selectDetail={setDetail} />}
    </View>
  );
}
