import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './MainMenu.module.scss';

const data = [
    { id: 0, title: 'Home', link: '/', parent: false, hasChildrens: false },
    { id: 1, title: 'Products', link: '/products', parent: false, hasChildrens: true },
    { id: 2, title: 'First Product', link: '/products/first-product', parent: 1, hasChildrens: false },
    { id: 3, title: 'Second Product', link: '/products/second-product', parent: 1, hasChildrens: false },
    { id: 4, title: 'Other Product', link: '/products/other-product', parent: 1, hasChildrens: false },
    { id: 5, title: 'About', link: '/about', parent: false, hasChildrens: false },
    { id: 6, title: 'Contact Us', link: '/contacts', parent: false, hasChildrens: false },
    { id: 7, title: 'Textpage', link: '/textpage', parent: false, hasChildrens: false },
    { id: 8, title: 'error404', link: '/error404', parent: false, hasChildrens: false },
];

export default function MainMenu(): JSX.Element {
    const router = useRouter();
    const currentURL = router.asPath;

    function classHasDropdown(hasChildrens: boolean): string {
        return hasChildrens ? styles['-has-dropdown'] : '';
    }

    function classActive(link: string): string {
        return link === currentURL ? styles['is-active'] : '';
    }

    function buildSubMenu(parentID: number): JSX.Element {
        const hasThisParent = data.filter((item) => item.parent === parentID);
        if (!hasThisParent.length) return <></>;
        return (
            <div>
                <ul>
                    {hasThisParent.map((item, index) => {
                        return (
                            <li key={index} className={classHasDropdown(item.hasChildrens) + classActive(item.link)}>
                                <Link href={item.link}>{item.title}</Link>
                                {buildSubMenu(item.id)}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return (
        <nav className={styles['main-menu']}>
            <ul className={(styles['main-menu__root'], styles['is-root'])}>
                {data
                    .filter((item) => item.parent === false)
                    .map((item, index) => {
                        return (
                            <li key={index} className={classHasDropdown(item.hasChildrens) + ' ' + classActive(item.link)}>
                                <Link href={item.link}>{item.title}</Link>
                                {buildSubMenu(item.id)}
                            </li>
                        );
                    })}
            </ul>
        </nav>
    );
}
