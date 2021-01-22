import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Nav from './nav.js'

const name = 'Shaine Leibowitz'
export const siteTitle = 'ShaineDL'

export default function Layout({ children, home }) {
  return (
      <div className={styles.container}>
      <Nav />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/posts">
            <a>← Read more posts</a>
          </Link>
        </div>
      )}
      </div>
  )
}