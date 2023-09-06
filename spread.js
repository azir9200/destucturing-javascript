function boxify(nums1, nums2) {
  const nums = [nums1, nums2];
  return nums;
}
const [first, second] = boxify(90, 56);
console.log(boxify(45, 46));

const employee = {
  name: 'araf uddin',
  age: 33,
  language: ['html', 'css', 'java'],
  others: {
    height: 64,
    weight: 67,
    home: {
      city: 'porto',
      road: 'rua pinto mourao'
    }
  }

}
const { name, age } = employee;
console.log(name, age);
const { city, road } = employee.others.home;
console.log(city, road);