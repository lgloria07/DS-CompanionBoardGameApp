// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRMnwUZeQ8szLW_LDmjPL5EHc1bLr06Oc",
  authDomain: "demonslayerapp-e179d.firebaseapp.com",
  databaseURL: "https://demonslayerapp-e179d-default-rtdb.firebaseio.com",
  projectId: "demonslayerapp-e179d",
  storageBucket: "demonslayerapp-e179d.firebasestorage.app",
  messagingSenderId: "496154556670",
  appId: "1:496154556670:web:184f96379e201bb7bb8daf",
  measurementId: "G-P9M1SDEWZD"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
