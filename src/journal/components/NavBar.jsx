import { ColorLens, LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, colors, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";



export const NavBar = ({drawerWidth=240}) => {

const dispatch = useDispatch();

const onClickLogout = () => {
  dispatch(startLogout());
};

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "primary.main",
        width: {sm:`calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth} px`}
      }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge='start'
                sx={{
                    mr: 2,
                    display: {sm: "none"}
                }}
            >
                <MenuOutlined></MenuOutlined>
            </IconButton>
            <Grid 
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6" noWrap component='div'>Journal App</Typography>
                <IconButton onClick={onClickLogout} color='error'>
                    <LogoutOutlined></LogoutOutlined>
                  </IconButton>
              </Grid>

        </Toolbar>
    </AppBar>
  )
}
