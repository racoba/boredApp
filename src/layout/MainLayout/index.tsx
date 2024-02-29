"use client"
import React from "react";
import { Navbar } from "../Navbar";
import { observer } from "mobx-react-lite";
import { Grid } from "@mui/material";

export const MainLayout = observer(({ children }: { children: React.ReactNode }) => {

    return (
        <Grid style={{}}>
            <Navbar />
            {children}
        </Grid>
    )
})