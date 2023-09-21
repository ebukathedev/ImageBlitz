// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCidUovFAqtwUMdvl5_tJ64QASNFvoI9PM",
	authDomain: "imageblitz.firebaseapp.com",
	projectId: "imageblitz",
	storageBucket: "imageblitz.appspot.com",
	messagingSenderId: "114550197027",
	appId: "1:114550197027:web:79b263c16e8aa37b461a96",
	measurementId: "G-TKGN20KQJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
