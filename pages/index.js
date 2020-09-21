import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="https://i.imgur.com/hV6gTN8.png" style={{width:300,height:300}} />
        <h1 className={styles.title}>
          We're an <i>art lab</i> creating audiovisual and cinematic experiences using any media available.
        </h1>

        <div className={styles.grid}>
          <a href="https://pacifico.club" className={styles.card}>
            <h3>We're streaming live &rarr;</h3>
            <p>We've curating the future of music on a Raspberri Pi</p>
          </a>

          <a href="https://distrokid.com/hyperfollow/seeders/waiting-for-the-job-is-done" className={styles.card}>
            <h3>The Seeders &rarr;</h3>
            <p>Their first EP "The road not taken" coming on November</p>
          </a>
        </div>
      </main>

      <p className={styles.description}>
        Wanna fuck with us? <a href="mailto:esta@bueno.studio">esta@bueno.studio</a>
      </p>

      <footer className={styles.footer}>
        Bueno Studio @ 2020
      </footer>
    </div>
  )
}
