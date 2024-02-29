"use client"
import React from "react";
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { NavbarContent } from "./NavbarContent";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setIsOpen(newOpen);
      };

    return(
    <div>
        <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
        <NavbarContent isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
)}