// config/firebase.ts

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getMessaging} from 'firebase/messaging';  // utile côté web

const firebaseConfig = {
  apiKey: 'AIzaSyDCfejtDo39REvXLtSDuRLiCdSPCDP3utk',
  authDomain: 'resqapp-b7820.firebaseapp.com',
  projectId: 'resqapp-b7820',
  storageBucket: 'resqapp-b7820.firebasestorage.app',
  messagingSenderId: '860421141839',
  appId: '1:860421141839:web:3a90886ec731f1d5e9013a'
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// ⚠️ Messaging est utilisé uniquement pour le web
// const messaging = getMessaging(app);

export {auth, db};
