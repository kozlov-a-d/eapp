import MainMenu from 'components/header/MainMenu';
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
                    <div className="header-cart-widget js-cart-widget">
                        <a className="header-cart-widget-counter" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.899414 1C0.899414 1.55 1.34941 2 1.89941 2H2.89941L6.49941 9.59L5.14941 12.03C4.41941 13.37 5.37941 15 6.89941 15H17.8994C18.4494 15 18.8994 14.55 18.8994 14C18.8994 13.45 18.4494 13 17.8994 13H6.89941L7.99941 11H15.4494C16.1994 11 16.8594 10.59 17.1994 9.97L20.7794 3.48C21.1494 2.82 20.6694 2 19.9094 2H5.10941L4.43941 0.57C4.27941 0.22 3.91941 0 3.53941 0H1.89941C1.34941 0 0.899414 0.45 0.899414 1ZM6.89941 16C5.79941 16 4.90941 16.9 4.90941 18C4.90941 19.1 5.79941 20 6.89941 20C7.99941 20 8.89941 19.1 8.89941 18C8.89941 16.9 7.99941 16 6.89941 16ZM14.9094 18C14.9094 16.9 15.7994 16 16.8994 16C17.9994 16 18.8994 16.9 18.8994 18C18.8994 19.1 17.9994 20 16.8994 20C15.7994 20 14.9094 19.1 14.9094 18Z"
                                    fill="white"
                                />
                            </svg>
                            <span className="header-cart-widget-counter__count">2</span>&nbsp; Item, 320 AED
                            <span className="header-cart-widget-counter__note">Cart</span>
                        </a>
                        <div className="header-cart-widget__dropdown"></div>
                    </div>
                </div>
            </div>
            <div className={styles.header__menu}>
                <MainMenu />
            </div>
        </div>
    );
}
