import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Link href="/posts">
        <img
            src="/images/home_page.png"
            alt="HomePage"
            className={`${utilStyles.home}`}
        />
      </Link>
    </Layout>
  )
}