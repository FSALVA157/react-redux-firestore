import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components"

const drawerWidth = 280;

export const JournalLayout = ({children}) => {

    return (
        <Box sx={{display:'flex'}} className="animate__animated animate__fadeIn animate__faster">
            <SideBar drawerWidth={drawerWidth}></SideBar>
            <NavBar drawerWidth={drawerWidth}></NavBar>
            <Box
             component='main'
             sx={{
                 flexGrow: 1,
                 p: 3
                }}
                >
                    <Toolbar/>
                    {children}
            </Box>
            

        </Box>
  )
}
