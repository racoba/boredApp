"use client"
import { Box, Button, Grid, TextField } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import AuthStore from "@/stores/AuthStore";

const Login = ({ children }: { children: React.ReactNode }) => {

    const authStore = useLocalObservable(() => new AuthStore());
    const router = useRouter();

    const onClickLogin = async () => {
        await authStore.login();
    }
    const onClickRegister = async () => {
        authStore.resetForm();
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
                        onClick={() => onClickLogin()}
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