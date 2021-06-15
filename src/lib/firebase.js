import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA6vvmZhGi2aIx6KrfvowuQal_jD1F4WcY',
  authDomain: 'leusys-code.firebaseapp.com',
  projectId: 'leusys-code',
  storageBucket: 'leusys-code.appspot.com',
  messagingSenderId: '618526984862',
  appId: '1:618526984862:web:b601b187341235b1c9c98f'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
