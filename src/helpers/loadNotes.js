import { DataSaverOff } from "@mui/icons-material";
import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"



export const loadNotes = async(uid='') => {
 
    if(!uid) throw new Error('El UID is required')

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notas`);
    const docs = await getDocs(collectionRef);
    const notes = [];
    docs.forEach(doc => {
        const datos = doc.data();
        notes.push({...datos,id: doc.id})
        })
    return notes;   
}
