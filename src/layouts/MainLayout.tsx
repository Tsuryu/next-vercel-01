import Head from "next/head"

import { Navbar } from "@/components/Navbar"
import styles from '@/styles/MainLayout.module.css'
import { FC } from "react"

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Index page" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
