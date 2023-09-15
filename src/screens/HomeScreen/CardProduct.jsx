import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import ENDPOINTS from '../../utils/endpoints';

export const CardProduct = ({ image, name, price, stars, reviews, saved }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // handle onPress SumarAlCarrito
      }}>
      <View style={styles.card}>
        <View style={styles.cardLikeWrapper}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress DarLike
            }}>
            <View style={styles.cardLike}>
              <FontAwesome
                color={saved ? '#ea266d' : '#222'}
                name="heart"
                solid={saved}
                size={22}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardTop}>
                    <Image
                      alt=""
                      resizeMode="cover"
                      style={styles.cardImg}
                      /* source={{ uri: `https://x-app-api-dev.fl0.io/public/${image}`  }} */
                      source={{ uri: image }} 

                    />
                  </View>

        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{name}</Text>

            <Text style={styles.cardPrice}>
              <Text style={{ fontWeight: '600' }}>${price} </Text>c/u

            </Text>
          </View>

          <View style={styles.cardFooter}>
            <FontAwesome
              color="#ea266d"
              name="star"
              solid={true}
              size={12}
              style={{ marginBottom: 2 }}
            />

            <Text style={styles.cardStars}>{stars}</Text>

            <Text style={styles.cardReviews}>({reviews} reviews)</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
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