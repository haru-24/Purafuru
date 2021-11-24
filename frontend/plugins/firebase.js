// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNjqgOeGastd48oeqTXcNqdeBSY7L4tCM',
  authDomain: 'purafuru.firebaseapp.com',
  projectId: 'purafuru',
  storageBucket: 'purafuru.appspot.com',
  messagingSenderId: '1069393762397',
  appId: '1:1069393762397:web:4bcc45684ce46fe741d5b4',
  measurementId: 'G-81F6DQN7PJ',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
