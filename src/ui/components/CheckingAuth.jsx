import { CircularProgress, Grid } from "@mui/material"


export const CheckingAuth = () => {
  return (
    <>
        <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={0}
    sx={{
      minHeight: '100vh',
      backgroundColor: 'primary.main',
      padding: 4
    }}      
    >
        <Grid  
          container
          direction="row"
          justifyContent="center"                 
          >
            <CircularProgress color="warning"></CircularProgress>
          </Grid>
        </Grid>
    </>
  )
}
