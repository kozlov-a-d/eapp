import Head from 'next/head';

export default function Custom404(): JSX.Element {
    return (
        <>
            <Head>
                <title>404 Not found</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>404 Not found</h1>
        </>
    );
}
