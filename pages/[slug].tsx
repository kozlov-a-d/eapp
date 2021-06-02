import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { Pages } from 'db/pages';

interface Props {
    heading: string;
    content: string;
}

const TextPage: NextPage<Props> = (props) => {
    // console.log(props);
    return (
        <>
            <Head>
                <title>{props.heading}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="l-container">
                <h1>{props.heading}</h1>
                <p>{props.content}</p>
            </div>
        </>
    );
};

export type PagesProps = {
    id: number;
    heading: string;
    link: string;
    slug: string;
    content: string;
};

export async function getStaticPaths() {
    const paths = Pages.map((pages: PagesProps) => ({
        params: { slug: pages.slug },
    }));

    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (props) => {
    if (!props.params) throw Error('My Error');
    const { slug } = props.params;
    const selectedPage = Pages.filter((page) => page.slug === slug)[0];

    return {
        props: {
            ...selectedPage,
        },
        revalidate: 1,
    };
};

export default TextPage;
