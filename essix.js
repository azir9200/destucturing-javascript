const products = [
  { name: ' laptop', price: 89000, brand: 'hp', color: 'grey' },
  { name: ' camera', price: 50000, brand: 'canon', color: 'black' },
  { name: 'watch', price: 4500, brand: 'tordy', color: 'silver' },
  { name: 'pant', price: 8200, brand: 'giffy', color: 'blue' },
  { name: 'glass', price: 8800, brand: 'murd', color: 'black' }
];
const brands = products.map(product => product.brand);
const price = products.map(product => product.price);
const color = products.map(product => product.color);
//console.log(brands);
// console.log(price);
// console.log(color);

//products.forEach(product => console.log(product.color));
//const cheap = products.filter(product => product.price <= 30000);
//console.log(cheap);
const spName = products.find(p => p.name.includes('p'));
console.log(spName);