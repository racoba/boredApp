"use client"
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

export default function Dashboard() {
    const { username } = useContext(AuthContext);

    return (
        <h1>Dashboard de { username }</h1>
    )
}