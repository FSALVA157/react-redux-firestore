
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved:'',
        notes:[],
        active:null
    },
    reducers: {
        isSavingNote:(state, action)=>{
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload;
        },
        setNotes: (state, action ) => {
            
        },
        setSaving: (state ) => {
            
        },
        updateNote: (state, action ) => {
            
        },
        deleteNote: (state, action ) => {
            
        },
        
    }
});


// Action creators are generated for each case reducer function
export const {isSavingNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote } = journalSlice.actions;