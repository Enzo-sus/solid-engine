import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return ( <
        >
        <Head>
        <title>wonderful snail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> <
        main className = { styles.main } >
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <
        div className = { styles.center } >
        <Image
            className={styles.logo}
            src="/snail.jpg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> <
        div className = { styles.thirteen } >
        <Image
              src="/thirteen.svg"
              alt="13"
              width={4}
              height={31}
              priority
            /> <
        /div> < /
        div >

        <
        div className = { styles.grid } >
        <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a> <
        Image src = "/tinykerbalvirus.jpg"
        width = {200}
        height = {100}
        sizes ="(max-width: 768px) 100vw,
        (max - width: 120 px) 50 vw,
        33 vw " / > <
        a href = "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className = { styles.card } target = "_blank"
        rel = "noopener noreferrer" >
        <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2> <
        p className = { inter.className } >
        Learn about Next.js in an interactive course with & nbsp; quizzes!
        <
        /p> <
        /a>

        <
        a href = "https://en.wikipedia.org/wiki/Snail"
        className = { styles.card } target = "_blank"
        rel = "noopener noreferrer" >
        <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2> <
        p className = { inter.className } >
        boilerplate Next.js & nbsp; projects. <
        /p> < /
        a >

        <
        a href = "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className = { styles.card } target = "_blank"
        rel = "noopener noreferrer" >
        <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2> <
        p className = { inter.className } >
        Instantly deploy your Next.js site to a shareable URL with & nbsp; Vercel. <
        /p> < /
        a > <
        /div> < /
        main > <
        />
    )
}



