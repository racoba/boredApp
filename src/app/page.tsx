"use client"
import React from "react"
import { useRouter } from "next/navigation";

export default function Home() {
     const [logged, setLogged] = React.useState(false);
     const router = useRouter();
     if (logged) {
          return router.push("/dashboard")
     } else {
          return router.push("/login")
     }
}