import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    
    console.log({email, password});
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

