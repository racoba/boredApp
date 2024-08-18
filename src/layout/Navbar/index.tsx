"use client"
import React from "react";
import { Button, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { NavbarContent } from "./NavbarContent";
import { black } from "@/declarations/colors";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setIsOpen(newOpen);
    };

    return (
        <Grid 
        display="flex"
        bgcolor={black}
        height={60}
        alignItems="center"
        >
            <Button onClick={toggleDrawer(true)}><MenuIcon style={{color: "white"}}/></Button>
            <NavbarContent isOpen={isOpen} setIsOpen={setIsOpen} />
        </Grid>
    )
}