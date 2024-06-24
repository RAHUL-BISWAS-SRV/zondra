import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDD74iH9MN_ijteJqxqFVdJ-OBC5xch3p0",
  authDomain: "next-zondra.firebaseapp.com",
  projectId: "next-zondra",
  storageBucket: "next-zondra.appspot.com",
  messagingSenderId: "159895670850",
  appId: "1:159895670850:web:d3f2f44683c1f80460dddb",
  measurementId: "G-XWK1VY369S",
  databaseURL: 'https://next-zondra-default-rtdb.firebaseio.com/',
};

export const app = initializeApp(firebaseConfig);
