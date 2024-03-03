"use client"
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { parseCookies } from "nookies"
import { GetServerSideProps } from "next";

export default function Dashboard() {
    const { username } = useContext(AuthContext);

    return (
        <h1>Dashboard de {username}</h1>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ["walletadmin.token"]: token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}