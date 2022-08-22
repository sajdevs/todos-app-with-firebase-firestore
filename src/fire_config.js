import {initializeApp} from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyACGTSaavrwXKHu1rbEuEszSf9lDKU3unE",
  authDomain: "cvplus-7efc9.firebaseapp.com",
  projectId: "cvplus-7efc9",
  storageBucket: "cvplus-7efc9.appspot.com",
  messagingSenderId: "875421208739",
  appId: "1:875421208739:web:de8eb32dab58cb3a29ef16",
  measurementId: "G-65N865SNSL"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const stores = getStorage(app)
export const auths = getAuth()