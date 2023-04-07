import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/logo.png" alt='sports manager' width={50} height={48} />
        <h1>Sports Manager</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/Solutions"><a>Solutions</a></Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.jpg" alt='sports banner' width={966} height={276} />
      </div>
    </div>
  )
}