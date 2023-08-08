import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '@/stores/authContext'
import { logout } from 'netlify-identity-widget'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { useState } from 'react'
import AppContext from '@/context/appContext'

export default function Players({users}) {

    const [myUsers, setMyUsers] = useState(users);

    return (
        <>
            <Head>
                <title>Player Management</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="Description" content="Adding Players"/>
                <meta name="author" content = "samersaber" />
                <meta name="og:url" content = "https://www.linkedin.com/in/samer-saber-6a8a241aa/" />
            </Head>
            <main>
                <AppContext.Provider value={{
                    users : myUsers,
                    setMyUsers : setMyUsers
                }}>
                <Layout/>
                </AppContext.Provider>
            </main>
            
        </>
    )
}

export async function getServerSideProps(){
    const response = await fetch("http://localhost:3000/api/users");
    const users = await response.json();

    return {
        props :{
            users : users
        }
    }
}