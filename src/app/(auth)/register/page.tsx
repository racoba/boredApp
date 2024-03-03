"use client"
import { Box, Button, Grid, TextField } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import Store from "./store";

const Login = ({ children }: { children: React.ReactNode }) => {

    const store = useLocalObservable(() => new Store());
    const router = useRouter();

    const onClickRegister = async () => {
        await store.register();
        router.push("/login");
    }
    const onClickBack = async () => {
        router.push("/login");
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
                REGISTER
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
                    type="text"
                    label="Username"
                    variant="standard"
                    value={store.form?.username}
                    onChange={(e) => store.setForm(e.target.value, undefined)}
                    style={{ width: 400, marginTop: 15 }}
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
            </Grid>
        </Box>

    )
}

export default observer(Login);