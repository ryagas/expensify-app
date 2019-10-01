// Object destructuring

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temperature: 88
//   }
// };

// const { name = 'Anonymous', age } = person;
// // same ^^ as this:
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);
// -----------------------------

//
// Array destructuring
//

// const address = [
//   '1299 S Juniper Street',
//   'Philadelphia',
//   'Pennsylvania',
//   '19147'
// ];

// const [, city, yourState = 'New York'] = address;

// console.log(`You are in ${city} ${yourState}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffeeSize, , mediumPrice] = item;

console.log(`A medium ${coffeeSize} costs ${mediumPrice}`);
