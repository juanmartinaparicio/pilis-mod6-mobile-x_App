export interface CategoryFilter {
  category: string;
}

const CATEGORIES = [
  {
    name: 'Hamburguesas',
    value: 'hamburguesas',
    color: '#F7EDD0',
  },
  {
    name: 'Bebidas',
    value: 'bebidas',
    color: '#F1DFC5',
  },
  {
    name: 'Sandwiches',
    value: 'sandwiches',
    color: '#B2DCC4',
  },
  {
    name: 'Pizzas',
    value: 'pizzas',
    color: '#F7C5BA',
  },
  {
    name: 'Postres',
    value: 'postres',
    color: '#F7C5BA',
  },
];

export default CATEGORIES;
