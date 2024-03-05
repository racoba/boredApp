"use client"
import { useState } from "react";
import { Box, Button, Grid, Snackbar, TextField } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { FormControl } from '@mui/material';
import Store from "./store";

const Login = () => {
    const [open, setOpen] = useState(false);

    const store = useLocalObservable(() => new Store());
    const router = useRouter();

    const onClickRegister = async () => {
        await store.register();
        router.push("/login");
    }
    const onClickBack = async () => {
        router.push("/login");
    }

    const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
            >
                <Grid
                    container
                    height={500}
                    minWidth={450}
                    width="35%"
                    bgcolor="white"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={8}
                >
                    REGISTER
                    <form onSubmit={() => onClickRegister()}>
                        <FormControl style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 350 }}>
                            <TextField
                                required
                                type="email"
                                label="Email"
                                variant="standard"
                                value={store.form?.email}
                                onChange={(e) => store.setForm(e.target.value, undefined)}
                                style={{ width: "100%" }}
                            />
                            <TextField
                                required
                                type="text"
                                label="Username"
                                variant="standard"
                                value={store.form?.username}
                                onChange={(e) => store.setForm(undefined, undefined, e.target.value)}
                                style={{ width: "100%", marginTop: 15 }}
                            />

                            <TextField
                                required
                                type="password"
                                label="Password"
                                variant="standard"
                                value={store.form?.password}
                                onChange={(e) => store.setForm(undefined, e.target.value, undefined)}
                                style={{ width: "100%", marginTop: 15 }}
                            />
                            <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="space-around"
                                width={230}
                            >
                                <Button
                                    onClick={() => onClickBack()}
                                    variant="outlined"
                                    style={{ color: "black", borderColor: "black", marginTop: 30 }}
                                >
                                    Back
                                </Button>
                                <Button
                                    onClick={() => onClickRegister()}
                                    variant="contained"
                                    style={{ backgroundColor: "black", marginTop: 30 }}
                                >
                                    Register
                                </Button>
                            </Box>
                        </FormControl>
                    </form>
                </Grid>
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                message="Usuário logado com sucesso!"
            />
        </>
    )
}

export default observer(Login);