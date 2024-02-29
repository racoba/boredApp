import React from "react";
import { Grid } from "@mui/material";

import { StockCard } from "@/components";

const mockedData = [
    {
        abbreviation: "BITCOIN",
        value: 65000,
        variation: 5
    },
    {
        abbreviation: "ETHERUM",
        value: 3300,
        variation: 25
    },
]

const Crypto = () => {
    return (
        <Grid marginTop={2}>
            <Grid
                container
                display="flex"
                flexDirection="row"
                justifyContent="center"
                spacing={4}
            >
                {mockedData.map((stock) => (
                    <Grid item>
                        <StockCard props={{ ...stock }} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}


export default Crypto;