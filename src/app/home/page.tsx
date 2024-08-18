"use client"
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useEffect } from "react";
import { parseCookies } from "nookies"
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";

const Home = () => {
    const { user } = useContext(AuthContext);
    const router = useRouter()
    useEffect(() => {
        const { ["boredApp.token"]: token } = parseCookies();
        if (!token) {
            router.back();
        }
    }, [])

    return (
        <>
            <h1>{user?.username}</h1>
            
        </>
    )
}




export default observer(Home);



// import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const { ["walletadmin.token"]: token } = parseCookies(ctx);

//     if (!token) {
//         return {
//             redirect: {
//                 destination: "/",
//                 permanent: false
//             }
//         }
//     }

//     return {
//         props: {}
//     }
// }