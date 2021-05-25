import Head from 'next/head';
import Block from 'components/content-block/Block';
import { GetStaticProps } from 'next';
import { ProductsListItemProps } from 'components/products/ProductsListItem';
import ProductsList from 'components/products/ProductsList';

const fixtureData = {
    title: 'EApp',
    h1: 'Welcome to',
};

export type HomePageProps = {
    productsData: Array<ProductsListItemProps>;
};

export default function HomePage(props: HomePageProps): JSX.Element {
    return (
        <>
            <Head>
                <title>{fixtureData.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>{fixtureData.h1}</h1>
            <Block h2="Best Products">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates similique ad incidunt dolore sapiente blanditiis.</p>
                <ProductsList items={props.productsData} />
            </Block>
            <Block>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates similique ad incidunt dolore sapiente blanditiis.</p>
            </Block>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/products/all');
    const data = await res.json();

    return {
        props: {
            productsData: data,
        },
        revalidate: 1,
    };
};
