import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

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
