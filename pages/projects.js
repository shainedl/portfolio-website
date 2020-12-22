import Layout, { siteTitle } from '../components/layout'
import Thumbnail from '../lib/thumbnails.js';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'
 
export default function Projects(props) {

  return (
    <Layout home>
        <Head>
            <title>{siteTitle} Projects</title>
        </Head>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className={utilStyles.pdf}>
            <a href='/data/Leibowitz_Final.pdf'> 
                <img 
                    src='https://daib13.github.io/blogs/20180725_vae_imgs/graphical_model.png'
                    alt="Paper"
                    className={`${utilStyles.project}`}>
                </img>
            </a>
            <div className={utilStyles.headingMd}>Natural Language Processing Research</div>
        </div>

        <Thumbnail
            video="X_eonFkd9ug"
            category="Freeze Pitch Presentation"
        /> 

        <Thumbnail
            video="njvg-jnGTHc"
            category="Virtual Reality: MTAR"
        />

        <Thumbnail
            video="ql0CleL4kDs"
            category="Virtual Reality: Makerlab Disco Party"
        />

        <div className={utilStyles.story} >
            <Link href="/story">
            <img 
                src='/story_pages/title_page.png' 
                alt="Title"
                className={`${utilStyles.project}`}>
            </img>
            </Link>
            <div className={utilStyles.headingMd}>A Fairy Good Story</div> 
        </div> 
    </Layout>
  )
}