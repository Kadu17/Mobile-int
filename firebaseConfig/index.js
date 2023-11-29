import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDOVRnScb-toXOmFNrV6qehMmj4f_L5waw",
    authDomain: "ds-tb-kadu.firebaseapp.com",
    projectId: "ds-tb-kadu",
    storageBucket: "ds-tb-kadu.appspot.com",
    messagingSenderId: "1034445899431",
    appId: "1:1034445899431:web:c5d7c5735527f22ed03d82"
  };


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export {app, auth, storage, db}