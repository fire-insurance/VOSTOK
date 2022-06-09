import type { NextPage } from 'next'
import Head from 'next/head'
import Home from './Home'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const PageContainer: NextPage = () => {
  const ymaps_link = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=${process.env.YMAPS_KEY}`

  return (
    <>
      <Head>
        <title>Восток | Коллегия адвокатов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Коллегия адвокатов Восток в городе Хабаровске предлагает услуги юридической защиты, ведения дел в судах, решения трудовых споров по доступным ценам" />
        <meta name='keywords' content='Адвокаты, юристы, Хабаровск, юриспруденция, юрист, адвокат, юридическая защита, адвокаты хабаровск, адвокат дешего, наследство, сопровождение разводов' />
      </Head>

      <main className='page-layout'>
        <div className='page-container'>
          <Home />
        </div>
      </main>
      <Script src={ymaps_link} strategy='afterInteractive' />
      <Script src='/maps.js' strategy='lazyOnload' />
    </>
  )
}

export default PageContainer
