import Link from 'next/link';
import { useCartStore } from 'stores/CartStore';

import styles from './ProductsListItem.module.scss';

export type ProductsListItemProps = {
    id: number;
    title: string;
    link: string;
    slug: string;
    price: number;
};

const ProductsListItem: React.FC<ProductsListItemProps> = (props: ProductsListItemProps) => {
    const store = useCartStore();
    const product = props;

    function addToCartHandler(): void {
        store.addItem({ ...product, count: 1 });
    }

    return (
        <div className={styles['products-list-item']}>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <button onClick={addToCartHandler}>Add to Cart</button>
            <Link href={product.link}>More</Link>
        </div>
    );
};

export default ProductsListItem;
