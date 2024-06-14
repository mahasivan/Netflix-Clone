
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBX1NC8dMATMzF9x_0v50aqR5vvfCMlrPs",
  authDomain: "netflix-clone-27311.firebaseapp.com",
  projectId: "netflix-clone-27311",
  storageBucket: "netflix-clone-27311.appspot.com",
  messagingSenderId: "424014107299",
  appId: "1:424014107299:web:effb1cc8c72b1c9a4ce516"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
   try{
       const res = await createUserWithEmailAndPassword(auth, email, password );
       const user = res.user;
       await addDoc(collection(db, "user"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
       });
   } catch (error) {
       console.log(error);
       alert(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
   } 
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};