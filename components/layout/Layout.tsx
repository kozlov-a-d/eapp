import React from 'react';
import Header from 'components/header/Header';
import styles from './Layout.module.scss';

export interface LayoutProps {
    children: JSX.Element | JSX.Element[];
}

export default function Layout(props: LayoutProps): JSX.Element {
    return (
        <>
            <header className={styles['l-header']}>
                <Header />
            </header>
            <main className={styles['l-main']}>{props.children}</main>
            <footer className={styles['l-footer']}>{'I`m here to stay'}</footer>
        </>
    );
}
