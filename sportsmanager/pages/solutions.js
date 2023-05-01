import styles from '@/styles/Solutions.module.css'
import Link from 'next/link'
export default function Solutions() {
    return (
      <div className={styles.solutions}>
        <h2>Our Solutions</h2>
        <ul>
        <li className='solution'>
          <Link href="/events">
            <h3>Event Scheduling</h3>
            <p>
              With our event scheduling solution, you can easily manage games, practices, and tournaments.
              Stay up-to-date and access your schedule from anywhere, at any time.
              Say goodbye to the hassle of managing events and focus on what matters most - playing and enjoying the game.
            </p>
          </Link>
        </li>
        <li className='solution'><Link href="/solutions">Teams</Link>
        </li>
        </ul>
      </div>

    )
  }