import React from 'react';
import {StyleSheet,  SafeAreaView,  ScrollView,  Text,  TouchableOpacity,  View,  Image,} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {items} from './products'




export default function ListaProductos() {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Restaurant Menu</Text>

        {items.map(({ img, label, ordered, likes, price }, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.card}>
                <Image
                  alt=""
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.cardImg}
                />

                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{label}</Text>

                  <View style={styles.cardRow}>
                    <View
                      style={[
                        styles.cardRowItem,
                        { borderRightColor: '#B2B3BE' },
                      ]}>
                      <FeatherIcon
                        color="#706F7B"
                        name="shopping-bag"
                        size={14}
                      />

                      <Text style={styles.cardRowItemText}>{ordered}</Text>
                    </View>

                    <View style={styles.cardRowItem}>
                      <FeatherIcon color="#706F7B" name="heart" size={14} />

                      <Text style={styles.cardRowItemText}>{}</Text>
                    </View>
                  </View>

                  <Text style={styles.cardPrice}>
                    ${price.toLocaleString('en-US')}
                  </Text>
                </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.cardAction}>
                  <FeatherIcon color="#fff" name="plus" size={24} />
                </TouchableOpacity>

                {/* <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.cardAction}>
                  <FeatherIcon color="#fff" name="minus" size={24} />
                </TouchableOpacity> */}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
});