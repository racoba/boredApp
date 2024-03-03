"use client"
import { Box, Button, Grid, TextField } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";
import AuthStore from "@/stores/AuthStore";

const Login = ({ children }: { children: React.ReactNode }) => {

    const authStore = useLocalObservable(() => new AuthStore());

    const onClickLogin = async () => {
        await authStore.login();
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
                <form autoComplete="off">
                    <TextField
                        required
                        type="email"
                        label="Email"
                        variant="standard"
                        value={authStore.form?.email}
                        onChange={(e) => authStore.setForm(e.target.value, undefined)}
                        style={{ width: 400 }}
                    />

                    <TextField
                        required
                        type="password"
                        label="Password"
                        variant="standard"
                        value={authStore.form?.password}
                        onChange={(e) => authStore.setForm(undefined, e.target.value)}
                        style={{ width: 400, marginTop: 15 }}
                    />
                    <Button onClick={() => onClickLogin()}>
                        Login
                    </Button>
                </form>
            </Grid>
        </Box>

    )
}

export default observer(Login);