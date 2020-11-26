import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dataatti Oy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="dataattilogo.svg" width="100%" />
        <h1>Bringing sweet potatoes to the digital era</h1>
        <h2 id="stay-tuned">Stay tuned!</h2>
      </main>
    </div>
  )
}
