import { Google, Satellite } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link as RouterLink} from "react-router-dom";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn, startLoginWithPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

const initialStateForm = {
  email:"",
  password: ''
}

export const LoginPage = () => {
  const {status, errorMessage} = useSelector(state=>state.auth)
  
  const dispatch = useDispatch();
  

  const {email,password,onInputChange } = useForm(initialStateForm)

  const isAuthenticating = useMemo(() => status==='checking', [status])

  const onSubmit=(event) => {
    event.preventDefault();
    //console.log({email,password});
    //dispatch(checkingAuthentication(email, password));
    dispatch(startLoginWithPassword(email, password))
  }

  const onGoogleSignIn = () => {
       dispatch(startGoogleSignIn())
  }


  return (
   <AuthLayout title="Login">
        <form 
          className="animate__animated animate__fadeIn animate__faster"
          onSubmit={onSubmit}>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
             label="Correo"
             type="email"
             placeholder="correo@google.com"
             fullWidth
             name="email"
             value={email}
             onChange={onInputChange}
             ></TextField>
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
             label="Password"
             type="password"
             placeholder="Contraseña"
             fullWidth
             name="password"
             value={password}
             onChange={onInputChange}
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
                   sm={6}
                   sx={{mt: 2}}>
                  <Button 
                     disabled={isAuthenticating}
                     type="submit"
                     variant="contained"
                     fullWidth>
                    Sign in
                  </Button>
                </Grid>
                <Grid item
                   xs={12}
                   sm={6}
                   sx={{mt: 2}}>
                  <Button 
                    disabled={isAuthenticating}
                    onClick={onGoogleSignIn}
                    variant="contained"
                    fullWidth>
                    <Google/>
                    <Typography sx={{ml:1}}>
                                          Google
                      </Typography>
                  </Button>
                </Grid>

          </Grid>
          <Grid container direction='row' justifyContent='end' >
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
            
        </form>

   </AuthLayout>
 

  )
}
