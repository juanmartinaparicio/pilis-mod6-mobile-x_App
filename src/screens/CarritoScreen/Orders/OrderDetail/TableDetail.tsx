import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Rows, Table } from 'react-native-reanimated-table';

import { Detail } from '@/services/orders/types';

interface Props {
  detail: Detail[];
}
export default function TableDetail({ detail }: Props) {
  const data = {
    tableHead: ['producto', 'cantidad', 'subtotal'],
    tableData: detail.map(d => [d.description, d.quantity, d.subTotal]),
  };

  return (
    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
      <Row data={data.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={data.tableData} textStyle={styles.text} />
    </Table>
  );
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});
