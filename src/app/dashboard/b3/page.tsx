import React from "react";
import { Grid } from "@mui/material";

import { StockCard } from "@/components";

const mockedData = [
    {
        abbreviation: "BBAS3",
        value: 60,
        variation: 5
    },
    {
        abbreviation: "TASA4",
        value: 14.4,
        variation: 25
    },
    {
        abbreviation: "HGLG11",
        value: 170,
        variation: -30
    },
    {
        abbreviation: "BBAS3",
        value: 60,
        variation: 5
    },
    {
        abbreviation: "TASA4",
        value: 14.4,
        variation: 25
    },
    {
        abbreviation: "HGLG11",
        value: 170,
        variation: -30
    },
    {
        abbreviation: "BBAS3",
        value: 60,
        variation: 5
    },
    {
        abbreviation: "TASA4",
        value: 14.4,
        variation: 25
    },
    {
        abbreviation: "HGLG11",
        value: 170,
        variation: -30
    },
]

const B3 = () => {
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


export default B3;