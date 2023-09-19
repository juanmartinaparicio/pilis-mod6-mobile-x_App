import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decrementQty,
  incrementQty,
} from '../../context/CarritoReducer';
import {
  decrementQuantity,
  incrementQuantity,
} from '../../context/ProductReducer';

const CardProduct = ({ item }) => {
  const dispatch = useDispatch();
  const addItemToCart = item => {
    dispatch(addToCart(item)); // cart array being used
    dispatch(incrementQuantity(item)); // product array being used
  };
  const cart = useSelector(state => state.cart.cart);
  const product = useSelector(state => state.product.product);

  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        // handle onPress
      }}
    >
      <View style={styles.card}>
        <Image
          alt=''
          resizeMode='cover'
          source={{ uri: item.image }}
          style={styles.cardImg}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardPrice}>${item.price}</Text>
        </View>

        <View>
          {cart.some(value => value.id === item.id) ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(incrementQty(item)); // cart
                  /* dispatch(incrementQuantity(item)); //product */
                }}
                style={styles.cardAction}
              >
                <FeatherIcon color='#fff' name='plus' size={24} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  dispatch(decrementQty(item));
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
                dispatch(addToCart(item));
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
