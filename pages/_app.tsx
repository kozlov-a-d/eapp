import type { AppProps } from 'next/app';
import { CartStore, CartStoreProvider } from 'stores/CartStore';
import Layout from 'components/layout/Layout';

import 'styles/globals.scss';
import 'styles/app.scss';

const store = new CartStore();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartStoreProvider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CartStoreProvider>
    );
}

export default MyApp;
