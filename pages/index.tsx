import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Home from './Home'
import Script from 'next/script'

const PageContainer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Восток | Коллегия адвокатов</title>
        <meta name="description" content="Коллегия адвокатов Восток в городе Хабаровск" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='page-layout'>
        <Header />
        <div className='page-container'>
          <Home />
        </div>
      </main>
    </>

  )
}

export default PageContainer
