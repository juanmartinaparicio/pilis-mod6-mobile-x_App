import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CATEGORIES, { CategoryFilter } from './categories';

const DEFAULT_CATEGORY = { category: 'all' };
interface Props {
  changeFilters: (category: CategoryFilter) => void;
  category: string;
}
export default function Categories({ changeFilters, category }: Props) {
  const handleCategory = (category: string) => {
    return () => {
      if (category === DEFAULT_CATEGORY.category)
        return changeFilters({ category });
      changeFilters(DEFAULT_CATEGORY);
    };
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.list}>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {CATEGORIES.map(({ name, color }) => (
              <TouchableOpacity key={name} onPress={handleCategory(name)}>
                <View style={[styles.card, { backgroundColor: color }]}>
                  <Text style={styles.cardLabel}>{name}</Text>
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
    marginBottom: 14,
  },
});
