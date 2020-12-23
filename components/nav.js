import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Nav() {
    return (
        <nav className={utilStyles.nav}>
            <ul className={utilStyles.list}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/posts">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <a href='/data/ShaineLeibowitz_Resume.pdf'>Resume</a>
                </li>       
                <li>
                    <a href="https://github.com/shainedl">
                        <img
                            src="/images/GitHub-Mark-Light-120px-plus.png"
                            alt="GitHub"
                            className={`${utilStyles.logo}`}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shaine-leibowitz/">
                        <img
                            src="/images/linkedin-512.png"
                            alt="LinkedIn"
                            className={`${utilStyles.logo}`}
                        />
                    </a>
                </li>
            </ul>
        </nav>
    )
}