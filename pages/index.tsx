import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Article App</title>
        <meta name='keyworkds' content='web development, programming, nextjs, javascript' />
      </Head>
      <h1>Welcome to articles app</h1>
    </div>
  )
}

export default Home
