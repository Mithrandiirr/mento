import type { NextPage } from 'next'
import Head from 'next/head'
import Coaching from '../components/Coaching'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Supported from '../components/Supported'

const Home: NextPage = () => {
  return (
      <Layout>
        <Head>
          <title>Mento® | Career Coaching &amp; Mentoring</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <Main />
        <Supported />
        <Coaching />
      </Layout>
  )
}

export default Home
