import ProductsListItem, { ProductsListItemProps } from 'components/products/ProductsListItem';
import styles from './ProductsList.module.scss';

export type ProductsListProps = {
    items: Array<ProductsListItemProps>;
};

function ProductsList(props: ProductsListProps): JSX.Element {
    // console.log('props', props);
    // const { productsData } = props;
    return (
        <div className={styles['products-list']}>
            {props.items.map((item, index) => {
                return (
                    <div key={index} className={styles['products-list-item']}>
                        <ProductsListItem {...item} />
                    </div>
                );
            })}
        </div>
    );
}

export default ProductsList;
