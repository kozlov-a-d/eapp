import { GetStaticProps } from 'next';
import Head from 'next/head';
import absoluteUrl from 'utils/absolute-url';

export type ProductShowPageProps = {
    id: number;
    title: string;
    link: string;
    slug: string;
    price: number;
};

export default function ProductShowPage(props: ProductShowPageProps): JSX.Element {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {/* <h1>{fixtureData.h1(slug)}</h1> */}
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
        </>
    );
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(absoluteUrl(`/api/products/all`));
    const products = await res.json();

    // Get the paths we want to pre-render based on posts
    const paths = products.map((product: ProductShowPageProps) => ({
        params: { slug: product.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (props) => {
    if (!props.params) throw Error('My Error');
    const res = await fetch(absoluteUrl(`/api/products/${props.params.slug}`));
    const data = await res.json();

    return {
        props: {
            ...data,
        },
        revalidate: 1,
    };
};
