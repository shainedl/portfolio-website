import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Nav from '../components/nav.js'
import Image from 'next/image'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>{siteTitle}</title>
      </Head>
      <Nav />
      <div className={utilStyles.home_wrapper}>
          <img
              src="/images/home_page.png"
              alt="HomePage"
              className={`${utilStyles.home}`}
          />
          <div className={utilStyles.homepage_text}>
          <div className={utilStyles.heading_home}>Shaine Leibowitz</div>
          <div className={utilStyles.heading2_home}>data scientist</div>
          <div className={utilStyles.about}>
            <p>Shaine Leibowitz has achieved strong technical and communication skills through her work and educational experiences. Wishing to improve the public health of vulnerable communities, she currently serves as the Machine Learning team lead at the non-profit Community Insight and Impact. The pursuit of applying data science to advocacy has drawn her to Biden for President and Hillary for America, and she has a background in industry from her time at Argus and WeWork. Shaine holds a BS in Engineering Management Systems from Columbia University and a MEng in Computer Science from Cornell Tech. During her free time, Shaine crochets, reads, and performs one woman living room musicals.

            </p>
            <p>
              If you would like to contact her, please email ShaineDL@gmail.com. 
              Shaine built this website using Next.js. Hope you enjoy!
            </p>
            </div>
          </div>
      </div>
    </div>
  )
}