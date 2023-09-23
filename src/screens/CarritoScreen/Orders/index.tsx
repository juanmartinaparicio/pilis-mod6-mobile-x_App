import { Text, View } from 'react-native';

import useOrder from '../context/hook';

export default function Orders() {
  const { orders, isLoading, refreshOrder, refreshOrders } = useOrder();

  return <View>{isLoading && <Text>cargando...</Text>}</View>;
}
