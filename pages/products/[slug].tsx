import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ProductList } from 'db/products';

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
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
        </>
    );
}

export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = ProductList.map((product: ProductShowPageProps) => ({
        params: { slug: product.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (props) => {
    if (!props.params) throw Error('My Error');
    const { slug } = props.params;
    const selectedProduct = ProductList.filter((product) => product.slug === slug)[0];

    return {
        props: {
            ...selectedProduct,
        },
        revalidate: 1,
    };
};
