import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <h2>Welcome to Sports Manager</h2>
        <div>
        Our platform is designed to provide a comprehensive and user-friendly solution for managing the aspects of an athletic department.
        Our goal is to simplify the management process for athletic departments. Whether you're a high school team, a college program, or a professional organization, our platform is designed to meet your unique needs and help you achieve your goals.
        Thank you for choosing Sports Manager as your sports management solution. We look forward to helping you succeed on and off the field!
        </div>
      </div>

    </>
  )
}
