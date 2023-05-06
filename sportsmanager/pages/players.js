import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '@/stores/authContext'
import { logout } from 'netlify-identity-widget'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function players() {
    return (
        <>
            <Head>
                <title>Plyer Management</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="Description" content="Adding Players"/>
                <meta name="author" content = "samersaber" />
                <meta name="og:url" content = "https://www.linkedin.com/in/samer-saber-6a8a241aa/" />
            </Head>
            <main>
                <Layout/>
            </main>
            
        </>
    )
}