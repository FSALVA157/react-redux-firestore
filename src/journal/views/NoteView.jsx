
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { ImageGallery } from '../components'


export const NoteView = () => {
  //desestructuro acive y lo renombro notaActiva
  const {active:notaActiva} = useSelector(state=> state.journal);

  const {date, title, id, body, onInputChange, formState} = useForm(notaActiva)

 const dateString = useMemo(() => {
                        const newDate = new Date(date);
                        return newDate.toUTCString()
                     }, [date])

  return (
    <Grid 
    className="animate__animated animate__fadeIn animate__faster"
      container direction='row'
      justifyContent='space-between'
      alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{dateString}</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name="title"
                value={title}
                onChange={onInputChange}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                name="body"
                value={body}
                onChange={onInputChange}
            />
        </Grid>

        {/* Image gallery */}
        <ImageGallery />

    </Grid>
  )
}
