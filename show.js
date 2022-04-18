import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getFirestore, collection, getDocs, setDoc, doc, query, where } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js'
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const colname = "list1";
const col = collection(db, colname);
const snapshot = await getDocs(col);
const list = snapshot.docs.map(doc => doc.data());
console.log(list);
