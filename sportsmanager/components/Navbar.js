import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '@/stores/authContext'

export default function Navbar() {
  const user = useContext(AuthContext)
  console.log(user)
  return (
    <div className="container">
      <nav>
        <Image src="/logo.png" alt='sports manager' width={50} height={48} />
        <h1>Sports Manager</h1>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/solutions">Solutions</Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.jpg" alt='sports banner' width={966} height={276} />
      </div>
    </div>
  )
}