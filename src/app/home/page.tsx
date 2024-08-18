"use client"
import { AuthContext } from "@/context/AuthContext";
import CasinoIcon from '@mui/icons-material/Casino';
import React, { useContext, useEffect } from "react";
import { parseCookies } from "nookies"
import { useRouter } from "next/navigation";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Box, Grid } from "@mui/material";

import { Button, TaskCard } from "@/components";
import strings from "@/resources/strings";
import Store from "./store";

const Home = () => {
    const store = useLocalObservable(() => new Store());
    const { user } = useContext(AuthContext);
    const router = useRouter()
    const pageStrings = strings;

    useEffect(() => {
        const { ["boredApp.token"]: token } = parseCookies();
        if (!token) {
            router.back();
        }
    }, [])

    const mockedData = [
        {
            title: "Titulo",
            score: 3,
            imageUrl: "",
            onConfirm: () => console.log("A"),
            onReject: () => console.log("A"),
        },
        {
            title: "Titulo 2",
            score: 5,
            imageUrl: "",
            onConfirm: () => console.log("A"),
            onReject: () => console.log("A"),
        },
    ]

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
            >
                <Grid
                    container
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    spacing={12}
                >
                    {mockedData.map((stock) => (
                        <Grid item>
                            <TaskCard {...stock} />
                        </Grid>
                    ))}
                </Grid>
                <Button
                    style={{ marginTop: 20 }}
                    onClick={() => console.log("Reroll")}
                    icon={<CasinoIcon />}
                >
                    {pageStrings.common.actions.reroll}
                </Button>
            </Box>

        </>
    )
}



export default observer(Home);