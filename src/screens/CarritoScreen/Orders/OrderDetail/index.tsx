import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import TableDetail from './TableDetail';

import { Detail } from '@/services/orders/types';
import COLORS from '@/utils/colors';

interface Props {
  detail: Detail[] | null;
  selectDetail: (detail: Detail[] | null) => void;
}
export default function OrderDetail({ detail, selectDetail }: Props) {
  const resetView = () => selectDetail(null);
  const total = detail?.reduce((t, p) => t + Number(p.subTotal), 0);

  return (
    <Modal transparent visible={detail !== null} onRequestClose={resetView}>
      <Pressable style={styles.container} onPress={resetView}>
        <View style={styles.card}>
          <TableDetail detail={detail!} />
          <Text style={styles.cardTotal}>Total: ${total}</Text>
          <Pressable style={styles.cardButton} onPress={resetView}>
            <Text style={styles.cardButtonText}>cerrar</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: `${COLORS.ORANGE}A1`,
  },
  card: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
  },
  cardButton: {
    borderRadius: 20,
    padding: 5,
    marginTop: 10,
    backgroundColor: `${COLORS.ORANGE}`,
  },
  cardButtonText: {
    fontSize: 30,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  cardTotal: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
