import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '@/stores/authContext'
import { logout } from 'netlify-identity-widget'

export default function Navbar() {
  const {user, login, logout, authReady} = useContext(AuthContext)
  console.log(user)
  return (
    <div className="container">
      <nav>
        <Image src="/logo.png" alt='sports manager' width={50} height={48} />
        <h1>Sports Manager</h1>
        {authReady && (
          <ul>
            <li className='tab'><Link href="/">Home</Link></li>
            <li className='tab'><Link href="/solutions">Solutions</Link></li>
            {user && <li className='full-name'>{user.user_metadata.full_name}</li>}
            {!user && <li onClick={login} className='btn'>Login/Signup</li>}
            {user && <li onClick={logout} className='btn'>Log out</li>}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner.jpg" alt='sports banner' width={966} height={276} />
      </div>
    </div>
  )
}