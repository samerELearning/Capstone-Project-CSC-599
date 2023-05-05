import styles from '@/styles/Solutions.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '@/stores/authContext'
import { logout } from 'netlify-identity-widget'
import Layout from '@/components/Layout'

export default function players() {
    return (
        <>
            <head>
                <title>NextJS MySQL CRUD tutorial</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="Description" content="NextJS MySQL CRUD tutorial"/>
                <meta name="author" content = "anand346@BePractical" />
                <meta name="og:url" content = "https://www.linkedin.com/in/anand346" />
            </head>
            <main>
                <Layout/>
            </main>
        </>
    )
}