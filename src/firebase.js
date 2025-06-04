import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBsn_iyAw6vt1CBBO27Req7JXKigceD7rQ",
  authDomain: "netflix-clone-259bc.firebaseapp.com",
  projectId: "netflix-clone-259bc",
  storageBucket: "netflix-clone-259bc.appspot.com",
  messagingSenderId: "1030034079377",
  appId: "1:1030034079377:web:ef58f6101caf3c3d940930"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc (collection(db,'user'),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login,signup, logout};