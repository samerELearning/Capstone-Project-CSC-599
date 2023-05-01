import styles from '@/styles/Solutions.module.css'
import Link from 'next/link'
export default function Solutions() {
    return (
      <div className={styles.solutions}>
        <h2>Our Solutions</h2>
        <ul>
        <li className={styles.sol}>
          <Link href="/events">
            <div className={styles.info}>
              <h3>Event Scheduling</h3>
              <p>
                With our event scheduling solution, you can easily manage games, practices, and tournaments.
                Stay up-to-date and access your schedule from anywhere, at any time.
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.sol}>
          <Link href="/players">
            <div className={styles.info}>
              <h3>Player Management</h3>
              <p>
              Efficiently manage your players with our player management solution.
              Add, edit, delete, and search for players with ease.
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.sol}>
          <Link href="/teams">
            <div className={styles.info}>
              <h3>Team Management</h3>
              <p>
              Efficiently manage your teams with our team management solution.
              Add, edit, delete, and search for teams with ease.
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.sol}>
          <Link href="/staff">
            <div className={styles.info}>
              <h3>Staff Management</h3>
              <p>
              Efficiently manage your staff with our staff management solution.
              Add, edit, delete, and search for staff with ease.
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.sol}>
          <Link href="/facilities">
            <div className={styles.info}>
              <h3>Facility Management</h3>
              <p>
              Efficiently manage your facilities with our facility management solution.
              Add, edit, delete, and search for facilities with ease.
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.sol}>
          <Link href="/equipments">
            <div className={styles.info}>
              <h3>Equipment Management</h3>
              <p>
              Efficiently manage your equipments with our equipment management solution.
              Add, edit, delete, and search for equipments with ease.
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.sol}>
          <Link href="/uniforms">
            <div className={styles.info}>
              <h3>Uniform Management</h3>
              <p>
              Efficiently manage your uniforms with our uniform management solution.
              Add, edit, delete, and search for uniforms with ease.
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.sol}>
          <Link href="/import">
            <div className={styles.info}>
              <h3>Data Import</h3>
              <p>
              Say goodbye to manual data entry - import all of your player information quickly and easily with just a few clicks.
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.sol}>
          <Link href="/export">
            <div className={styles.info}>
              <h3>Data Export</h3>
              <p>
              Effortlessly export data with our data export solution. Download data and take it wherever you need.
              </p>
            </div>
          </Link>
        </li>
        </ul>
      </div>

    )
  }