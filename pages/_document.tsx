import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html lang='ru '>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index,follow" />
		<meta name="yandex-verification" content="c402569a83f930dc" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>

    )
}
