"use client"
import { useContext } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/context/AuthContext";
import Store from "./store";

type SignInData = {
    email: string;
    password: string;
}

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const store = useLocalObservable(() => new Store());
    const router = useRouter();

    const onClickLogin = async (data: SignInData) => {
        await signIn(data);
    }

    const onClickRegister = async () => {
        store.resetForm();
        router.push("/register")
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            <Grid
                container
                height={500}
                width="35%"
                bgcolor="white"
                direction="column"
                alignItems="center"
                justifyContent="center"
                borderRadius={8}
            >
                LOGIN
                <TextField
                    required
                    type="email"
                    label="Email"
                    variant="standard"
                    value={store.form?.email}
                    onChange={(e) => store.setForm(e.target.value, undefined)}
                    style={{ width: 400 }}
                />

                <TextField
                    required
                    type="password"
                    label="Password"
                    variant="standard"
                    value={store.form?.password}
                    onChange={(e) => store.setForm(undefined, e.target.value)}
                    style={{ width: 400, marginTop: 15 }}
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
            </Grid>
        </Box>

    )
}

export default observer(Login);