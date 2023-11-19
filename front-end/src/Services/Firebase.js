// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUHCDwEAbtmOLnoS_kPA4JzHIYvvOXZvY",
  authDomain: "flixnet-55e98.firebaseapp.com",
  projectId: "flixnet-55e98",
  storageBucket: "flixnet-55e98.appspot.com",
  messagingSenderId: "994877459959",
  appId: "1:994877459959:web:3143804061fc0784d6b2f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.useDeviceLanguage();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const loggedInUser = res.user;

    const q = query(collection(db, "users"), where("uid", "==", loggedInUser.uid));
    // where [query method]
    //fieldPath: string | FieldPath; The path to compare
    //opStr: WhereFilterOp; The operation string (e.g "<", "<=", "==", ">", ">=").
    //value: any; The value for comparison

    // Creates and returns a new Query with the additional filter that documents must contain the specified field and the value should satisfy the relation constraint provided.
    const docs = await getDocs(q);
    // You can also retrieve multiple documents with one request by querying documents in a collection.
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: loggedInUser.uid,
        name: loggedInUser.displayName,
        authProvider: "google",
        email: loggedInUser.email,
        photoURL: loggedInUser.photoURL,
        phoneNumber: loggedInUser.phoneNumber,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logOut,
};
