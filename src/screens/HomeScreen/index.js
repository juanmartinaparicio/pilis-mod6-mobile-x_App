import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { fetchData } from '../../services/fetchData';
import { useFetch } from '../../services/useFetch';

import bur from '../../assets/logox.png';
import { Suspense } from 'react';
import ENDPOINTS from '../../utils/endpoints';
import { CardProduct } from './CardProduct';
import { products } from './products';

const URLGET = (ENDPOINTS.PRODUCTS)
///////PRIMERA OPCION PARA LLAMAR A LA API
const apiData = fetchData(URLGET)
///////SEGUNDA OPCION PARA LLAMAR A LA API
/* const apiData = useFetch(URLGET) */
console.log(apiData)

 

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
      {/* <Suspense fallback={<View><Text>Loading...</Text></View>}> */}
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Que quieres comer?</Text>
          {/* categories */}

          {/* menu */}

          {/* {apiData?.map((product) => { */}
          {products.map((product, index) => { 
            return (
              <CardProduct key= {index} {
                ...product
              }/>
            );
          })}
        </ScrollView>
      {/* </Suspense> */}

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