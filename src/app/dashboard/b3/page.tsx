"use client"
import React from "react";
import { Grid } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";

import { StockCard } from "@/components";
import Store from "./store"

const mockedData = [
    "BBAS3",
    // "TASA4",
    // "HGLG11",
    // "BBAS3",
    // "TASA4",
    // "HGLG11",
    // "BBAS3",
    // "TASA4",
    // "HGLG11",
]



const B3 = () => {
    const store = useLocalObservable(() => new Store(mockedData));

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
                {store.assets ? store.assets.map((stock) => (
                    <Grid item>
                        <StockCard props={{ abbreviation: stock?.symbol, value: stock?.regularMarketPrice, variation: stock?.regularMarketChange }} />
                    </Grid>
                )) : null}
            </Grid>
        </Grid>
    )
}


export default observer(B3);