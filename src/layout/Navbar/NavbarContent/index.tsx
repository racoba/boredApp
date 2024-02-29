"use client"
import React from "react";
import { observer } from "mobx-react-lite"
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
        {mainRoutes.map((route, index) => (
          <ListItem key={route.text} disablePadding>
            <ListItemButton href={route.path} >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
})