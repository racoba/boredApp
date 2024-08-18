import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, Typography } from "@mui/material";

import { Button } from "@/components";
import strings from "@/resources/strings";

interface IProps {
    title: string;
    score: number;
    imageUrl: string;
    onConfirm: () => void;
}

export const TaskCard = (props: IProps) => {
    const { title, score, imageUrl, onConfirm } = props;
    const componentStrings = strings;

    return (
        <>
            <Card
                variant="outlined"
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: 300,
                    minHeight: 300,
                    height: "auto"
                }}>
                <CardContent
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: 0,
                        paddingTop: 6
                    }}>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        {title}
                    </Typography>
                    <div style={{ height: 160, width: 120, backgroundColor: "black" }}>

                    </div>
                    <Typography style={{ marginTop: 8 }} sx={{ mb: 1.5 }} color="text.secondary">
                        {componentStrings.components.taskCard.points(score)}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}>
                    <Button onClick={onConfirm}>
                        {componentStrings.common.actions.accept}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}