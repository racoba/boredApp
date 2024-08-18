"use client"
import React, { useContext, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";

import Store from "./store"
import { AuthContext } from "@/context/AuthContext";

const Ranking = () => {
    const { user } = useContext(AuthContext);
    const store = useLocalObservable(() => new Store());

    return (
        <Grid marginTop={2}>
            <Grid
                container
                display="flex"
                flexDirection="row"
                justifyContent="center"
                spacing={4}
            >
            </Grid>
        </Grid>
    )
}


export default observer(Ranking);