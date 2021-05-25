import Link from 'next/link';
import styles from './ProductsListItem.module.scss';

export type ProductsListItemProps = {
    id: number;
    title: string;
    link: string;
    slug: string;
    price: number;
};

export default function ProductsListItem(props: ProductsListItemProps): JSX.Element {
    function addToCarthandler(): void {
        // console.log(`Add to Cart: ${props.title}`);
    }

    return (
        <div className={styles['products-list-item']}>
            <div>{props.title}</div>
            <div>{props.price}</div>
            <button onClick={addToCarthandler}>Add to Cart</button>
            <Link href={props.link}>More</Link>
        </div>
    );
}
