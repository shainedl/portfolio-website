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
      <div className={styles.backToHome}>
          <Link href="/projects">
            <a>Check out some of my projects</a>
          </Link>
      </div>
      <div className={styles.backToHome}>
          <Link href="/posts">
            <a>Read some of my blog posts</a>
          </Link>
      </div>
      <div className={styles.backToHome}>
          <a href='/data/ShaineLeibowitz_Resume.pdf'>Take a look at my Resume</a>
      </div>     
      <div className={styles.backToHome}>
        <a href="https://github.com/shainedl">Go to my GitHub page</a>
      </div> 
      <div className={styles.backToHome}>
          <a href="https://www.linkedin.com/in/shaine-leibowitz/">Connect with me on LinkedIn</a>
      </div>
      <div className={styles.backToHome}>Email me at ShaineDL@gmail.com</div>
      <div className={styles.backToHome}>Website designed and built by me using Next.js</div>
    </Layout>
  )
}