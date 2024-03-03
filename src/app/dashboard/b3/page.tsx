"use client"
import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";

import { StockCard } from "@/components";
import Store from "./store"
import { AuthContext } from "@/context/AuthContext";

const B3 = () => {
    const { user } = useContext(AuthContext);
    const store = useLocalObservable(() => new Store(user?.id || -1, user?.walletId || -1));

    React.useEffect(() => {
        store.fetch()
    }, [])

    return (
        <Grid marginTop={2}>
            <Grid
                container
                display="flex"
                flexDirection="row"
                justifyContent="center"
                spacing={4}
            >
                {store.assets
                    ?
                    store.assets.map((stock) => (
                        <Grid item>
                            <StockCard props={{ abbreviation: "", value: 0, variation: 0 }} />
                        </Grid>
                    ))
                    :
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "black", marginTop: 30 }} onClick={() => store.createWallet()}>Create Wallet</Button>}
            </Grid>
        </Grid>
    )
}


export default observer(B3);