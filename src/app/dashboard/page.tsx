"use client"
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useEffect } from "react";
import { parseCookies } from "nookies"
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";

const Dashboard = () => {
    const { user, userWallet } = useContext(AuthContext);
    const router = useRouter()
    useEffect(() => {
        const { ["walletadmin.token"]: token } = parseCookies();
        console.log(userWallet)
        if (!token) {
            router.back();
        }
    }, [])

    return (
        <>
            <h1>{user?.username} dashboard</h1>
            {user?.walletId &&
                <h2>You have {userWallet?.id} assets</h2>
            }
        </>
    )
}




export default observer(Dashboard);



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