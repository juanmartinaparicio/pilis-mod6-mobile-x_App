import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';

import {
  addToCart,
  decrementQty,
  incrementQty,
} from '../../context/redux/reducers/CarritoReducer';
import { incrementQuantity } from '../../context/redux/reducers/ProductReducer';

import { Product } from '@/services/products/types';

interface Props {
  product: Product;
}

const CardProduct = ({ product }: Props) => {
  const dispatch = useDispatch();
  const addItemToCart = item => {
    dispatch(addToCart(item)); // cart array being used
    dispatch(incrementQuantity(item)); // product array being used
  };
  const cart = useSelector(state => state.cart.cart);

  return (
    <TouchableOpacity
      onPress={() => {
        // handle onPress
      }}
    >
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

        <View>
          {cart.some(value => value.id === product.id) ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(incrementQty(product)); // cart
                  /* dispatch(incrementQuantity(item)); //product */
                }}
                style={styles.cardAction}
              >
                <FeatherIcon color='#fff' name='plus' size={24} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  dispatch(decrementQty(product));
                  /* dispatch(decrementQuantity(item)); */
                }}
                style={styles.cardAction}
              >
                <FeatherIcon color='#fff' name='minus' size={24} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(product));
              }}
              style={styles.cardActionM}
            >
              <FeatherIcon color='#fff' name='plus' size={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardProduct;

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
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -8,
    marginBottom: 'auto',
  },
  cardRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderColor: 'transparent',
  },
  cardRowItemText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: '#706f7b',
    marginLeft: 4,
  },
  cardPrice: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#ff9801',
    marginTop: 8,
  },
  cardAction: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    backgroundColor: '#ff9801',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 14,
  },
  cardActionM: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: '#ff9801',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 14,
  },
});
