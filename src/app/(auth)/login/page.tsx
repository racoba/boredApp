"use client"
import { useContext, useState } from "react";
import { Box, Button, FormControl, Grid, Snackbar, TextField } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/context/AuthContext";
import Store from "./store";

import Input from "@/components/Input";

import './styles.scss'

type SignInData = {
    email: string;
    password: string;
}

const Login = () => {
    const [open, setOpen] = useState(false);
    const { signIn } = useContext(AuthContext)
    const store = useLocalObservable(() => new Store());
    const router = useRouter();

    const onClickLogin = async (data: SignInData) => {
        await signIn(data, setOpen);
    }

    const onClickRegister = async () => {
        router.push("/register")
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
                    LOGIN
                    <form onSubmit={() => onClickLogin({ email: store.form.email, password: store.form.password })}>

                        <FormControl style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 350 }}>
                            <Input
                                required={true}
                                type="email"
                                label="Email"
                                value={store.form?.email}
                                onChange={(e) => store.setForm(e.target.value, undefined)}

                            />

                            <Input
                                props={{}}
                                required
                                type="password"
                                label="Password"
                                variant="standard"
                                value={store.form?.password}
                                onChange={(e) => store.setForm(undefined, e.target.value)}
                                style={{ width: "100%", marginTop: 15 }}
                            />
                            <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="space-around"
                                width={230}
                            >
                                <Button
                                    onClick={() => onClickRegister()}
                                    variant="outlined"
                                    style={{ color: "black", borderColor: "black", marginTop: 30 }}
                                >
                                    Register
                                </Button>
                                <Button
                                    onClick={() => onClickLogin({ email: store.form.email, password: store.form.password })}
                                    variant="contained"
                                    style={{ backgroundColor: "black", marginTop: 30 }}
                                >
                                    Login
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