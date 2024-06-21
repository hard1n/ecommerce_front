// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, onSnapshot } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLQA7XXtGs32i-sOya1FWSlzNslTvSbxM",
  authDomain: "ecommers-clothes.firebaseapp.com",
  projectId: "ecommers-clothes",
  storageBucket: "ecommers-clothes.appspot.com",
  messagingSenderId: "220699089838",
  appId: "1:220699089838:web:14dda4ae4ca0c4a9a1063f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Reference = collection(db, "Card-tshirt/");
export { app, db };

export const FetchProduct = (setData) => {
  const productCollention = collection(db, "Card-tshirt");
  return onSnapshot(productCollention, (snapshot) => {
    const productList = snapshot.docs.map((product) => ({
      id: product.id,
      ...product.data(),
    }));
    setData(productList);
  });
};
