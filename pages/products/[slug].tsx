import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { ProductList } from 'db/products';

interface Props {
    id: number;
    title: string;
    link: string;
    slug: string;
    price: number;
}

const ProductShowPage: NextPage<Props> = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="l-container">
                <h1>{props.title}</h1>
                <h2>{props.price}</h2>
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const paths = ProductList.map((product: Props) => ({
        params: { slug: product.slug },
    }));

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

export default ProductShowPage;
