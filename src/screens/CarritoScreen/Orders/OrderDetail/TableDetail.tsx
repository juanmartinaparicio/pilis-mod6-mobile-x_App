import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Col, Row, Table } from 'react-native-reanimated-table';

import { Detail } from '@/services/orders/types';
import COLORS from '@/utils/colors';

interface Props {
  detail: Detail[];
}

export default function ({ detail }: Props) {
  const total = detail?.reduce((t, p) => t + Number(p.subTotal), 0);
  const table = {
    head: ['producto', 'cantidad', 'subtotal'],
    data: detail.map(product => [
      product.description,
      product.quantity,
      `$${product.subTotal}`,
    ]),
    widthArr: [130, 70, 100],
  };

  return (
    <View>
      <Table borderStyle={{ borderWidth: 1, borderColor: COLORS.ORANGE }}>
        <Row
          data={table.head}
          widthArr={table.widthArr}
          style={styles.header}
          textStyle={[styles.text, styles.textHeader]}
        />
      </Table>
      <ScrollView
        showsVerticalScrollIndicator
        style={{ maxHeight: 140, marginTop: -1 }}
      >
        <Table
          borderStyle={{
            borderWidth: 1,
            borderColor: COLORS.ORANGE,
          }}
        >
          {table.data.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              widthArr={table.widthArr}
              textStyle={[styles.text]}
            />
          ))}
        </Table>
      </ScrollView>
      <Table>
        <Col data={['hola']} />
        <Row
          data={['total:', `$${total}`]}
          widthArr={[200, 100]}
          style={styles.header}
          textStyle={[styles.text, styles.textHeader]}
        />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: COLORS.ORANGE },
  text: { textAlign: 'left', fontSize: 15, padding: 5 },
  textHeader: { fontWeight: 'bold' },
});
