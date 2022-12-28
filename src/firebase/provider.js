import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider =  new GoogleAuthProvider();

export const signInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log(credentials);
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid}
        
    } catch (error) {
        // Handle Errors here.
    // const errorCode = error.code;
    const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            message: errorMessage
        }
    }
}

export const registerWithEmailAndPassword = async({displayName, email, password}) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user
        
        await updateProfile(FirebaseAuth.currentUser,{displayName})
        
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {
        return {
            ok: false,
            message: error.message
        }
    }
};

export const signInWithPassword = async({email, password})=>{
    try {
        const data = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(data.user.email);
        //const{uid, email, displayName} = data.user;
        return {
            ok: true,
            uid: data.user.uid,
            email: data.user.email,
            displayName: data.user.displayName,
            photoURL: null
        }

    } catch (error) {
        return {
            ok: false,
            message: error.message
        }
    }
}

export const signOutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
