import React from "react";
import MuiButton from "@mui/material/Button"
import { Box, Grid, Stack } from "@mui/material";

interface IProps {
    onClick: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}
export const Button = ( props : IProps) => {
    const { onClick, children, icon, ...rest } = props;
    return (
        <>
            <MuiButton variant="contained" onClick={onClick} {...rest} >
                    {children} 
                    {icon && 
                        <Box marginLeft={1} display="flex" alignItems="center">{icon}</Box>
                    }
                    
            </MuiButton>
        </>
    )
}