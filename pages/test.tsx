import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
interface Post {
  id: string;
  title: string
} 

function About({posts} : { posts: any}) {
  return <div className={styles.container}>
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className={styles.main}>
    <h1 className={styles.title}>
      This is <a href="https://nextjs.org">test!</a>
    </h1>

    <p className={styles.description}>
      Get started by editing{' '}
      <code className={styles.code}>pages/index.tsx</code>
    </p>

    <div className={styles.grid}>
      <Link href="/">
        <a className={styles.card}>
          <h2>Home &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </Link>

      <Link href="/about">
        <a className={styles.card}>
          <h2>About &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </Link>
    </div>
  </main>

  <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
</div>
}

export async function getStaticProps() {
  const posts = {}
  return {
    props: {
      posts,
    },
  }
}

export default About