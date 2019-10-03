import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB7UIy3QXLyWw5I_D2jFafRbn4tqLoBsiU',
  authDomain: 'expensify-65ec5.firebaseapp.com',
  databaseURL: 'https://expensify-65ec5.firebaseio.com',
  projectId: 'expensify-65ec5',
  storageBucket: '',
  messagingSenderId: '256227811648',
  appId: '1:256227811648:web:076db46ebc1160b7419aa5',
  measurementId: 'G-WQ5JGPHKKY'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// expenses.forEach(expense => {
//   database.ref('expenses').push(expense)
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses =[]
//     snapshot.forEach((childSnapshot)=>{
//       console.log(childSnapshot.key)
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database.ref('expenses')
//   .on('value', (snapshot)=>{
//     const expenses =[]
//     snapshot.forEach((childSnapshot)=>{
//       console.log(childSnapshot.key)
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database.ref('notes/-LqDrBj91DbsN84Y1hNr').remove()
// database.ref('notes').push({
//   title:'Course topics',
//   body:'React, Angular, Firebase'
// })

// const onValueChange = database.ref().on('value', (snapshot)=>{
//   const {name, job: {company, title}} = snapshot.val()
//   console.log(`${name} is a ${title} at ${company}`)
// }, (e) => {
//   console.log('error with data fetching', e)
// })

// const onValueChange = database.ref().on('value', (snapshot)=>{
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref('age').set(29)
// }, 3500);
// setTimeout(() => {
//   database.ref().off('value',onValueChange)
// }, 7000);
// setTimeout(() => {
//   database.ref('age').set(30)
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot)=>{
//     const val =snapshot.val()
//     console.log(val)
//   })
//   .catch((e)=>{
//     console.log('error fetching data',e)
//   })

// database
//   .ref()
//   .set({
//     name: 'Ryan C',
//     age: 44,
//     stressLevel: 2,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     isSingle: true,
//     location: {
//       city: 'Diamond Bar',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((e) => {
//     console.log('This failed.', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'

// job: 'Manager',
// 'location/city': 'Boston'
// });
