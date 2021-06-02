import Link from 'next/link';
import { useRef } from 'react';
import { useCartStore } from 'stores/CartStore';

import styles from './ProductsListItem.module.scss';

export type ProductsListItemProps = {
    id: number;
    title: string;
    link: string;
    slug: string;
    price: number;
    priceFull?: number;
    image: string;
};

const ProductsListItem: React.FC<ProductsListItemProps> = (props: ProductsListItemProps) => {
    const store = useCartStore();
    const product = props;
    const inputCountRef = useRef<HTMLInputElement | null>(null);

    function handlerAddToCart(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const current = inputCountRef.current;
        if (!current) return;
        const count = parseInt(current.value);
        if (!count) return;
        store.addItem({ ...product, count });
        current.value = '1';
    }

    return (
        <div className={styles['products-list-item']}>
            <div className={styles['products-list-item__img-wrapper']}>
                <Link href={product.link}>
                    <a>
                        <img src={product.image} alt={product.title} title={product.title} decoding="async" loading="lazy" />
                    </a>
                </Link>
            </div>
            <h3 className={styles['products-list-item__name']}>
                <Link href={product.link}>{product.title}</Link>
            </h3>
            <div className={styles['products-list-item__text']}>
                <div className={styles['products-list-item__price']}>
                    <span className={styles['products-list-item__price--curr']}>${product.price}</span>
                    {product.priceFull && <span className={styles['products-list-item__price--old']}>${product.priceFull}</span>}
                </div>
                <div className={styles['products-list-item__footer']}>
                    <form className={styles['product-actions']} onSubmit={handlerAddToCart}>
                        <div className={styles['product-actions__count']}>
                            <input ref={inputCountRef} defaultValue="1" type="number" pattern="^[ 0-9]+$" />
                        </div>
                        <button className={styles['product-actions__btn']}>Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductsListItem;
