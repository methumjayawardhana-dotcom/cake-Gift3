const products = [
  {
    id: 'c1',
    name: 'Decadent Chocolate Fudge',
    price: 45.00,
    category: 'cakes',
    image: 'assets/images/chocolate-cake.jpg',
    rating: 4.9,
    badge: 'Bestseller',
    description: 'Rich, moist chocolate cake layered with creamy chocolate fudge frosting.'
  },
  {
    id: 'c2',
    name: 'Strawberry Dream Cream',
    price: 38.00,
    category: 'cakes',
    image: 'assets/images/strawberry-cake.jpg',
    rating: 4.7,
    badge: 'Seasonal',
    description: 'Light vanilla sponge layered with fresh strawberries and whipped cream.'
  },
  {
    id: 'c3',
    name: 'Classic Red Velvet',
    price: 42.00,
    category: 'cakes',
    image: 'assets/images/red-velvet.jpg',
    rating: 4.8,
    badge: null,
    description: 'Traditional red velvet sponge with smooth cream cheese frosting.'
  },
  {
    id: 'f1',
    name: 'Elegance Rose Bouquet',
    price: 55.00,
    category: 'flowers',
    image: 'assets/images/flower-bouquet.jpg',
    rating: 4.6,
    badge: 'Premium',
    description: 'A stunning arrangement of pink roses and white lilies wrapped in luxury paper.'
  },
  {
    id: 'g1',
    name: 'Luxury Celebration Hamper',
    price: 85.00,
    category: 'gifts',
    image: 'assets/images/gift-basket.jpg',
    rating: 5.0,
    badge: 'Popular',
    description: 'Curated selection of gourmet chocolates, snacks, and a plush teddy bear.'
  }
];

// Helper to format currency
const formatPrice = (price) => {
  return '$' + price.toFixed(2);
};
