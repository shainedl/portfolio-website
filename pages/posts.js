import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Posts({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>{siteTitle} Blog</title>
      </Head>
        <h2 className={utilStyles.headingXl}>BLOG</h2>
        <ul className={utilStyles.blog_list}>
          {allPostsData.map(({ id, date, title, source }) => (
            <li className={utilStyles.listItem} key={id}>

              <Link href={`/posts/${id}`}>
              <a>
                <img className={utilStyles.blog_img}
                  src={source}
                  alt={id}
                ></img>
                <div className={utilStyles.blog_details}>
                  <div className={utilStyles.headingMd}>{title}</div>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </div>
              </a>
              </Link>
            </li>
              ))}
        </ul>
    </Layout>
  )
}