"use client"
import React from "react";
import { observer } from "mobx-react-lite"
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import useMainRoutes from "@/hooks/useMainRoutes";

export const NavbarContent = observer(({isOpen, setIsOpen}: {
  isOpen: boolean,
  setIsOpen: (newOpen: boolean)=> void;
}) => {

  const mainRoutes = useMainRoutes

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {mainRoutes.map((route) => (
          <ListItem key={route.text} disablePadding>
            <ListItemButton href={route.path} >
              <ListItemIcon>
                {<route.icon/>}
              </ListItemIcon>
              <ListItemText primary={route.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer style={{height:"100%"}} open={isOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      <Button style={{width:20, alignSelf:"center", bottom:0}}><LogoutIcon/></Button>
      </Drawer>
    </>
  )
})