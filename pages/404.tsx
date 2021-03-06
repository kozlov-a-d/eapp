import { NextPage } from 'next';
import Head from 'next/head';

const Page404: NextPage = () => {
    return (
        <>
            <Head>
                <title>404 Not found</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="l-container">
                <h1>404 Not found</h1>
            </div>
        </>
    );
};

export default Page404;
