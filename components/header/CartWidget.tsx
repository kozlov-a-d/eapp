import { observer } from 'mobx-react-lite';
import { useCartStore } from 'stores/CartStore';

// import styles from './CartWidget.module.scss';

const CartWidget: React.FC = observer(() => {
    const store = useCartStore();

    return (
        <div>
            <div>
                {store.totalCount} items worth $ {store.totalPrice}
            </div>
        </div>
    );
});

export default CartWidget;
