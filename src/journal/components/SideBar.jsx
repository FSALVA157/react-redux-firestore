import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const SideBar = ({drawerWidth}) => {
  return (
    <Box
      component='nav'
      sx={{
        width: {sm: drawerWidth},
        flexShrink: {sm: 0}        
      }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper':{boxsizing:'border-box', width: drawerWidth}
            }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component='div'>
              Fernando Salva
            </Typography>
          </Toolbar>
            <Divider/>
            <List>
              {
                ['Enero','Febrero','Marzo','April','Mayo','Junio','Julio'].map(text=>{
                  return (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                           <TurnedInNot/>
                        </ListItemIcon>
                        <Grid container>
                          <ListItemText primary={text}/>
                          <ListItemText secondary={'Ullamco eu proident veniam ea pariatur minim adipisicing conse'} />
                         </Grid>                        
                      </ListItemButton>
                    </ListItem>
                  )
                })
              }
            </List>
            
        </Drawer>

    </Box>
  )
}
