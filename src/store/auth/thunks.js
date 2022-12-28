import { registerWithEmailAndPassword, signInWithGoogle, signInWithPassword, signOutFirebase } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    
    return async (dispatch, getState) => {
        dispatch(checkingCredentials())
    };
}

export const startGoogleSignIn = () => {

    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout(result.message));
        dispatch(login(result));
    }
}

export const startWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch, getState)=>{
        dispatch(checkingCredentials());
        const {ok, uid, photoURL, message} = await registerWithEmailAndPassword({email, password, displayName});
        // const respuesta = await registerWithEmailAndPassword({email, password, displayName});
        // console.log(">>>>>",respuesta);
        
        if(!ok) return dispatch(logout(message));
        dispatch(login({uid, photoURL, displayName, email}));
        
    }
}

export const startLoginWithPassword = (email, password)=>{
    
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
        const data = await signInWithPassword({email, password});      
        if(!data.ok) return dispatch(logout(data.message))
        dispatch(login(data));
    }
}

export const startLogout = () => {
    return async (dispatch, getState) => {
        await signOutFirebase();
        dispatch(logout());
    }
}

