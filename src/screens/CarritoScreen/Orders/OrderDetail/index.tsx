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

  return (
    <Modal transparent visible={detail !== null} onRequestClose={resetView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <TableDetail detail={detail!} />
          <Pressable style={styles.cardButton} onPress={resetView}>
            <Text style={styles.cardButtonText}>cerrar</Text>
          </Pressable>
        </View>
      </View>
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
