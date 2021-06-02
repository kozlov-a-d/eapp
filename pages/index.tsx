import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Block from 'components/content-block/Block';
import { ProductsListItemProps } from 'components/products/ProductsListItem';
import ProductsList from 'components/products/ProductsList';

import { ProductList } from 'db/products';

const fixtureData = {
    title: 'EApp',
    h1: 'Welcome to',
};

interface Props {
    productsData: Array<ProductsListItemProps>;
}

const HomePage: NextPage<Props> = (props) => {
    return (
        <>
            <Head>
                <title>{fixtureData.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="l-container">
                <h1>{fixtureData.h1}</h1>
            </div>
            <Block h2="Best Products">
                <ProductsList items={props.productsData} />
            </Block>
            <Block>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates similique ad incidunt dolore sapiente blanditiis.</p>
            </Block>
        </>
    );
};

// Page.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//   return { userAgent }
// }

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            productsData: ProductList,
        },
        revalidate: 1,
    };
};

export default HomePage;
