"use client"
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useEffect } from "react";
import { parseCookies } from "nookies"
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const { username } = useContext(AuthContext);
    const router = useRouter()
    useEffect(()=>{
        const { ["walletadmin.token"]: token } = parseCookies();

        if(!token){
            router.back();
        }
    },[])

    return (
        <h1>Dashboard de {username}</h1>
    )
}








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