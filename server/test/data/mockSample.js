const addressMockData = {
  userId: 1,
  zipcodeId: 1,
  cityId: 1,
  address: '1, 1349 street, Milpitas',
};

const cartMockData = {
  userId: 1,
  productId: 1,
  quantity: 9,
};

const cityMockData = {
  city: 'San Francisco',
};

const paymentMockData = {
  userId: 1,
  card_type: 'American Express',
  card_number: '1234567890123456',
  card_expiry: '12/21',
  card_cvv: '1234',
};

const reviewMockData = {
  userId: 1,
  product_id: 1,
  review: 'this product is amazing, i really liked it and would like to rate 5 on 5',
  rating: 5,
};

const userMockData = {
  username: 'nandakishore',
  password: '1234abcd',
  email: 'nsaboo@github.com',
  age: 22,
  mobile: 919980499811,
  gender: 1,
  firstname: 'Nandakishore',
  lastname: 'Saboo',
};

const zipcodeMockData = {
  zipcode: 99999,
};

module.exports = {
  addressMockData,
  cartMockData,
  cityMockData,
  paymentMockData,
  reviewMockData,
  userMockData,
  zipcodeMockData,
};
