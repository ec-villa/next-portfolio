import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
            <title>Next JS Portfolio</title>
            <meta name='description' content='Site of my projects' />
            <meta charSet='utf-8'/>
            <meta name='robots' content='noindex, nofollow' />
            <meta name='viewport' content='width=device-width' />
            <Head>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
            <style jsx>{`
                body {
                    font-family: 'Noto Sans JP', sans-serif;
                    margin: 0;
                }
            `}</style>
            </Html>
        )
    }
};