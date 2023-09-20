import { Image, StyleSheet, Text, View } from 'react-native';

import CartOptions from '@/components/CartOptions';
import { Product } from '@/services/products/types';

interface Props {
  product: Product;
}

const CardProduct = ({ product }: Props) => {
  return (
    <View>
      <View style={styles.card}>
        <Image
          alt={`product - ${product.name}`}
          resizeMode='cover'
          source={{ uri: product.image ?? undefined }}
          style={styles.cardImg}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{product.name}</Text>
          <Text style={styles.cardPrice}>${product.price}</Text>
        </View>

        <CartOptions product={product} />
      </View>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardImg: {
    width: 76,
    height: 76,
    borderRadius: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: '#323142',
    marginBottom: 6,
  },
  cardPrice: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#ff9801',
    marginTop: 8,
  },
});
