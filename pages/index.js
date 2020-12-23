import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styles from '../components/layout.module.css'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <h2 className={utilStyles.heading2Xl}>{siteTitle}</h2>
        <h2 className={utilStyles.headingXl}>Data Scientist</h2>
      <div className={styles.backToHome}>Website designed and built by me using Next.js</div>
      <div className={styles.backToHome}>Please contact me by emailing ShaineDL@gmail.com</div>

    </Layout>
  )
}