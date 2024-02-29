import React from "react";
import { Navbar } from "../Navbar";
import { observer } from "mobx-react-lite";

type IProps = {
    children?: React.ReactNode
}

export const MainLayout: React.FC<IProps> = observer((props) => {
    const { children } = props;

    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
})