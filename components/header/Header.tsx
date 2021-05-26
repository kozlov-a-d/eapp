import MainMenu from 'components/header/MainMenu';
import CartWidget from 'components/header/CartWidget';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header(): JSX.Element {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <Link href="/">
                    <a className={styles.header__logo}>
                        <img src="/images/logo.png" alt="Logo Logo" />
                    </a>
                </Link>

                <div className={styles.header__location}>
                    <span>address: in a galaxy far, far away</span>
                </div>

                <div className={styles.header__email}>
                    <a href="mailto:info@domain.com">info@domain.com</a>
                </div>

                <div className={styles.header__cart}>
                    <CartWidget />
                </div>
            </div>
            <div className={styles.header__menu}>
                <MainMenu />
            </div>
        </div>
    );
}
