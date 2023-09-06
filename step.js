function muliply(num1, num2) {
  const result = num1 * num1;
  return result;
}
const output = muliply(34, 2);
console.log(output);

const myNumbers = [12, 13, 24, 25];
myNumbers.push(23);
myNumbers.shift(89);
myNumbers.pop();
console.log(myNumbers);

const myNummbers = [98, 97, 87, 65, 95];
for (let i = 0; i < myNummbers.length; i++) {
  const number = myNummbers[i];
  console.log(i, number);
}

function multy(num1, num2) {
  const result = num1 * num2;
  return result;
}
const outppy = multy(25, 5);
console.log(outppy);

const pupil = {
  name: 'azir uddin',
  age: 38,
  job: 'study',
  address: ['rua pinto', 'mourao', 'house no-164']
};
const info = `my name is ${pupil.name}, i am ${pupil.age} years old. 
My house number is ${pupil.address[2]} `;
console.log(info);

const student = {
  name: 'Sakib khan',
  age: 43,
  movie: ['dui, duari']
};
const about = `my name is ${student.name}`;
console.log(about);

const add = (a, b) => a + b;
const sum = add(5, 6);
console.log(sum);

function edd(a, d) {
  return a - d;
} const edu = edd(62, 7);
console.log(edu);

function even(a, d) {
  return a - d;
} const rest = even(15, 6);
console.log(rest);

const getFifty = (x, z, c) => x * z * c;;
const ssum = getFifty(3, 4, 5);
console.log(ssum);

const isEven = x => x % 2 == 0;
const digit = isEven(32);
console.log(digit);

const doMath = (num1, num2) => {
  const suum = num1 / num2;
  return suum;
}
const ttoal = doMath(203, 4);
console.log(ttoal);


const newNumbers = [...myNumbers];
myNumbers.push(89, 79, 80);
newNumbers.push(23, 24, 35, 40);
console.log(newNumbers);
console.log(myNumbers);


const azir = [26, 28];
const jasima = [...azir];
const araf = [...azir, 50, 52];
jasima.push(65, 63);
console.log(araf);
console.log(jasima);
console.log(azir);


const number = [12, 13, 14];
const newNumber = [...number];
newNumber.push(34, 35, 36,);
const newDigit = [...number, 78, 79, 76];
console.log(number);
console.log(newNumber);
console.log(newDigit);