import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CardProduct from './CardProduct';
import Categories from './Categories';
import { getProducts } from '../../context/redux/reducers/ProductReducer';

import getAllProducts from '@/services/products/getAllProducts';
import { Product } from '@/services/products/types';

const DEFAULT_CATEGORY = { category: 'all' };

export default function ListaProductos() {
  const [filters, setFilters] = useState(DEFAULT_CATEGORY);
  const products = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      if (response.isError) return;

      const { result: products } = response;
      products?.map(product => dispatch(getProducts(product)));
    };

    fetchProducts();
  }, []);

  const filterProducts = (products: Product[]) => {
    return products.filter(product => {
      return (
        product.category === 'all' || product.category === filters.category
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Categories changeFilters={setFilters} category={filters.category} />

        {products.map((product: Product) => (
          <CardProduct key={product.id} product={product} />
        ))}
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
});
