import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Categories() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
         <View style={styles.list}>
           <ScrollView contentContainerStyle={styles.listContent} horizontal={true} showsHorizontalScrollIndicator={false}>
            {[
              {
                img: 'https://assets.withfra.me/Detailed.3--menu-1.png',
                label: 'Pizza',
                color: '#F7EDD0',
              },
              {
                img: 'https://assets.withfra.me/Detailed.3--menu-2.png',
                label: 'Burger',
                color: '#F1DFC5',
              },
              {
                img: 'https://assets.withfra.me/Detailed.3--menu-3.png',
                label: 'Sushi',
                color: '#B2DCC4',
              },
              {
                img: 'https://assets.withfra.me/Detailed.3--menu-4.png',
                label: 'Dessert',
                color: '#F7C5BA',
              },
              {
                img: 'https://assets.withfra.me/Detailed.3--menu-1.png',
                label: 'Pizza',
                color: '#F7EDD0',
              },
              {
                img: 'https://assets.withfra.me/Detailed.3--menu-2.png',
                label: 'Burger',
                color: '#F1DFC5',
              },
              {
                img: 'https://assets.withfra.me/Detailed.3--menu-3.png',
                label: 'Sushi',
                color: '#B2DCC4',
              },
              {
                img: 'https://assets.withfra.me/Detailed.3--menu-4.png',
                label: 'Dessert',
                color: '#F7C5BA',
              },
            ].map(({ label, color }, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={[styles.card, { backgroundColor: color }]}>
                    <Text style={styles.cardLabel}>{label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  listTitle: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: '#323142',
  },
  listAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listActionText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#706f7b',
    marginRight: 2,
  },
  card: {
    width: 80,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  cardImg: {
    width: 40,
    height: 40,
    marginBottom: 12,
  },
  cardLabel: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#252117',
  },
  list: {
    marginBottom: 24,
  },
});