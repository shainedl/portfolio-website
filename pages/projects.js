import Layout, { siteTitle } from '../components/layout'
import Thumbnail from '../lib/thumbnails.js';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'
 
export default function Projects(props) {

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
            <title>{siteTitle} Projects</title>
        </Head>
        <h2 className={utilStyles.headingXl}>PROJECTS</h2>
        <ul className={utilStyles.blog_list}>
            <li className={utilStyles.listItem}>
                <a href='/data/Leibowitz_Final.pdf'> 
                    <img 
                        src='https://daib13.github.io/blogs/20180725_vae_imgs/graphical_model.png'
                        alt="Paper"
                        width="480">
                    </img>
                </a>
                <div className={utilStyles.blog_details}>Natural Language Processing Research</div>
            </li>

            <li className={utilStyles.listItem}>
            <Thumbnail
                video="X_eonFkd9ug"
                category="Freeze Pitch Presentation"
            /> 
            </li>
            <li className={utilStyles.listItem}>
            <Thumbnail
                video="njvg-jnGTHc"
                category="Virtual Reality: MTAR"
            />
            </li>
            <li className={utilStyles.listItem}>
                <Thumbnail
                    video="ql0CleL4kDs"
                    category="Virtual Reality: Makerlab Disco Party"
                />
            </li>
            <li className={utilStyles.listItem}>
                <Link href="/story">
                <a>
                <img 
                    src='/story_pages/title_page.png' 
                    alt="Title"
                    width="480">
                </img>
                <div className={utilStyles.blog_details}>A Fairy Good Story</div> 
                </a>
                </Link>
            </li>
        </ul>
    </Layout>
  )
}