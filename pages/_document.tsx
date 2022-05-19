import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Recipe Site</title>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />

                    <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>

                    <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument