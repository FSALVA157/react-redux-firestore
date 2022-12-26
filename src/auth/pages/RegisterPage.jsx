
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link as RouterLink} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

const initialForm = {
  email:'',
  password: '',  
  displayName:''  
}

const formValidations = {
  email: [(value)=>value.includes('@'),'el email debe llevar un carácter @' ],
  password: [(value)=>value.length >= 6,'el password debe tener mas de 6 caracteres'],
  displayName: [(value)=>value.length >= 1,'el nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const [submitted, setSubmitted] = useState(false);

  const{
    formState,
    onInputChange,
    onResetForm,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid
  }=useForm(initialForm, formValidations)

  
  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if(!isFormValid) return;
    dispatch(startWithEmailPassword(formState));
  }

  
  return (
   <AuthLayout title="Register">
        <form
         onSubmit={onSubmit}
        >
        <Grid item xs={12} sx={{mt: 2}}>
            <TextField
             label="Nombre"
             type="text"
             placeholder="John Doe"
             fullWidth
             name="displayName"
             value={formState.displayName}
             onChange={onInputChange}
             error={!!displayNameValid && submitted}
             helperText={displayNameValid}
             ></TextField>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
             label="Correo"
             type="email"
             placeholder="correo@google.com"
             fullWidth
             name="email"
             value={formState.email}
             onChange={onInputChange}
             error={!!emailValid && submitted}
             helperText={emailValid}
             ></TextField>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
             label="Password"
             type="password"
             placeholder="Contraseña"
             fullWidth
             name="password"
             value={formState.password}
             onChange={onInputChange}
             error={!!passwordValid && submitted}
             helperText={passwordValid}
             ></TextField>
          </Grid>
            <Grid               
               container
               spacing={2}
               sx={{mb: 2, mt:2}}               
               >
                <Grid item xs={12}
                display={!!errorMessage ? '':'none'}               
                 >
                  <Alert severity="error">
                    {errorMessage}
                  </Alert>
                </Grid>
                <Grid item
                   xs={12}
                   sm={12}
                   sx={{mt: 2}}>
                  <Button
                    disabled={isCheckingAuthentication}
                    type="submit"
                    variant="contained"
                    fullWidth>
                    Crear Cuenta
                  </Button>
                </Grid>                

          </Grid>
          <Grid container direction='row' justifyContent='end' >
            <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
            
        </form>

   </AuthLayout>
 

  )
}
