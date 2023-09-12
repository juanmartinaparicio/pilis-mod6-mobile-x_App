import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { fetchData } from '../../services/fetchData';

import bur from '../../assets/logox.png';
import { Suspense } from 'react';
import ENDPOINTS from '../../utils/endpoints';
import { CardProduct } from './CardProduct';


const items = [
  {
    img: 'https://www.clarin.com/img/2022/05/27/0HXb0UR0v_1256x620__2.jpg#1653659778281',
    name: 'Hamburguesa',
    price: 1800,
    stars: 4.45,
    reviews: 124,
    saved: false,
  },
  {
    img: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
    name: 'Pizza',
    price: 2850,
    stars: 4.81,
    reviews: 409,
    saved: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxdJ54vhEcK6fZfga1z6tJjTvJKwzBnXPuA&usqp=CAU',
    name: 'Pancho',
    price: 900,
    stars: 4.3,
    reviews: 72,
    saved: false,
  },
];

const URLGET = (ENDPOINTS.PRODUCTS)

const apiData = fetchData(URLGET)



export default function HomeScreen() {

  const data = apiData.read();
 /*  console.log(data)
 */

 return <Text style={styles.title}>Que quieres comer?</Text>
  return (
    <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>

      {/* search bar */}
      
      
      <Suspense fallback={<View><Text>Loading...</Text></View>}>
        {/* home */}
        <ScrollView contentContainerStyle={styles.container}>

          <Text style={styles.title}>Que quieres comer?</Text>
          {/* categories */}

          {/* menu */}

          {data?.map((product) => {
          {/* {items.map(({ img, name, price, stars, reviews, saved }, index) => {  */}
            console.log(product);
            
          
            return (
              <CardProduct key= {product.id} {
                ...product
              }/>
            );
          })}
        </ScrollView>
      </Suspense>

    </SafeAreaView>
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
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardLike: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLikeWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    right: 12,
  },
  cardTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardImg: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#232425',
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: '400',
    color: '#232425',
  },
  cardFooter: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardStars: {
    marginLeft: 2,
    marginRight: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#232425',
  },
  cardReviews: {
    fontSize: 14,
    fontWeight: '400',
    color: '#595a63',
  },
});