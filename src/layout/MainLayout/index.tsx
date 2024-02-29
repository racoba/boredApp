"use client"
import React from "react";
import { Navbar } from "../Navbar";
import { observer } from "mobx-react-lite";

export const MainLayout = observer(({children}: {children:React.ReactNode}) => {

    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
})