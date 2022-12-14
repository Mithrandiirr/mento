import type { NextPage } from 'next'
import Head from 'next/head'
import client from '../client'
import Coaching from '../components/Coaching'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Supported from '../components/Supported'
import groq from 'groq'

const Home: NextPage = ({main,supported} : any) => {
  console.log(main)
  return (
      <Layout>
        <Head>
          <title>Mento® | Career Coaching &amp; Mentoring</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <Main main={main} />
        <Supported supported={supported} />
        <Coaching />
      </Layout>
  )
}
export async function getStaticProps() {
  const main = await client.fetch(groq`
    *[_type == "main"][0]
  `)
  const supported= await client.fetch(groq`
  *[_type == "supported"][0]
`)
  return {
    props: {
      main,supported
    }
  }
}
export default Home
