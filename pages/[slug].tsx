import { GetStaticProps } from 'next';
import absoluteUrl from 'utils/absolute-url';
import Head from 'next/head';

export type TextPage = {
    heading: string;
    content: string;
};

export default function TextPage(props: TextPage): JSX.Element {
    // console.log(props);
    return (
        <>
            <Head>
                <title>{props.heading}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
        </>
    );
}

export type PagesProps = {
    id: number;
    heading: string;
    link: string;
    slug: string;
    content: string;
};

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(absoluteUrl(`/api/pages/all`));
    const pages = await res.json();

    // Get the paths we want to pre-render based on posts
    const paths = pages.map((pages: PagesProps) => ({
        params: { slug: pages.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (props) => {
    if (!props.params) throw Error('My Error');
    const res = await fetch(absoluteUrl(`/api/pages/${props.params.slug}`));
    const data = await res.json();

    return {
        props: {
            ...data,
        },
        revalidate: 1,
    };
};
