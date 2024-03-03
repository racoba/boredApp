"use client"
import React, { useContext, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";

import { StockCard } from "@/components";
import Store from "./store"
import { AuthContext } from "@/context/AuthContext";

const B3 = () => {
    const { user } = useContext(AuthContext);
    const store = useLocalObservable(() => new Store());

    useEffect(() => {
        if (user) {
            store.userId = user?.id;
            store.fetch(user.id);
        }
    }, [store.walletId])

    return (
        <Grid marginTop={2}>
            <Grid
                container
                display="flex"
                flexDirection="row"
                justifyContent="center"
                spacing={4}
            >
                {store.walletId
                    ?
                    store.assets.map((stock) => (
                        <Grid item>
                            <StockCard props={{ abbreviation: "", value: 0, variation: 0 }} />
                        </Grid>
                    ))
                    :
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "black", marginTop: 30 }}
                        onClick={() => store.createUserWallet(user?.id)}
                    >
                        Create Wallet
                    </Button>}
            </Grid>
        </Grid>
    )
}


export default observer(B3);