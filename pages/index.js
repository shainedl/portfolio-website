import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Nav from '../components/nav.js'
import Image from 'next/image'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Nav />
      <div className={utilStyles.home_wrapper}>
          <Image
              src="/images/home_page.png"
              alt="HomePage"
              width="auto"
              height="auto"
              className={`${utilStyles.home}`}
          />
          <div className={utilStyles.homepage_text}>
          <div className={utilStyles.heading_home}>Shaine Leibowitz</div>
          <span className={utilStyles.heading2_home}>Data Scientist</span>
          <div className={utilStyles.about}>
            <p>Shaine Leibowitz has a background in Data Science having worked 
            for Hillary for America, Argus Information, WeWork, and most recently 
            helped out the Nebraska data team for Biden for President. 
            She holds a BS in Engineering Management Systems from Columbia University 
            and a MEng in Computer Science from Cornell Tech. She currently volunteers 
            for the open source project Community Insight Impact on the 
            data and machine learning teams. During her free time, Shaine crochets 
            and performs one woman living room musicals.
            </p>
            <p>
              If you would like to contact her, please email ShaineDL@gmail.com. 
              Shaine built this website using Node.JS. Hope you enjoy!
            </p>
            </div>
          </div>
      </div>
    </div>
  )
}