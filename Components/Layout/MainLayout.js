import React from 'react'
import Head from "next/head"
import { Fragment } from 'react'
import ReactNavbar from "../NavBar/ReactNavbar"
function MainLayout({children}) {
    return (<>
    <Head>
<title>Meet Ups</title>
<meta name="description" content="A huge list of active nextjs meetups."/>
    </Head>
    <ReactNavbar/>
        <div style={{height:"100%",width:"100%",overflow:"hidden"}}>
        <br/>
        {children}
        <br/>
        </div>
        </>
    )
}

export default MainLayout
