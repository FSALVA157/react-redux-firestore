import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, isSavingNote, setActiveNote } from "./journalSlice";


export const startGetNotes = () => {

  return async(dispatch, useState)=>{

  }
}

export const startUpdateNote = ({data}) => {
    return async(dispatch, useState)=>{

    }
}

export const startCreateNote = () => {

    return async(dispatch, getState)=>{
        dispatch(isSavingNote());
        const {uid} = getState().auth;

        //crear la nueva nota
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB,`${uid}/journal/notas`))
        const setDocResp = await setDoc(newDoc, newNote);

        // console.log({newDoc, setDocResp})
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }

}

export const deleteNote = ({data}) => {
    return async(dispatch, useState)=>{
        
    }
}
