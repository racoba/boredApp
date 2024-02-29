import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Grid, Typography } from "@mui/material";

interface IProps {
    props: {
        abbreviation: string;
        value: number;
        variation: number;
    }
}

export const StockCard = ({ props }: IProps) => {
    const { abbreviation, value, variation } = props;
    return (
        <>
            <Card variant="outlined" style={{ width: 200 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        {abbreviation}
                    </Typography>
                    <Typography variant="h5" component="div">
                    </Typography>
                    <Grid>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            R${value}
                        </Typography>
                        <Typography variant="body2" color={variation > 0 ? "green" : "red"}>
                            {variation}%
                        </Typography>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="small">Details</Button>
                </CardActions>
            </Card>
        </>
    )
}