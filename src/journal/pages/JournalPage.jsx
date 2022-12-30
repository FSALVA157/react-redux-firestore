import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startCreateNote } from '../../store/journal/thunks';



export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector(state=>state.journal);
  
  const onClickNew = ()=>{
    dispatch(startCreateNote())
  }

   

  return (
    <JournalLayout>
      {
        (active == null)?
          <NothingSelectedView/>:
           <NoteView/>
                 }

      <IconButton
        onClick={onClickNew}
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
