import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

interface IProduct {
    slug: string;
    title: string;
    price: number;
    count: number;
}

class CartStore {
    items: Array<IProduct> = [];
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    get totalCount(): number {
        return this.items.reduce((sum, current) => sum + current.count, 0);
    }

    get totalPrice(): number {
        return this.items.reduce((sum, current) => sum + current.count * current.price, 0);
    }

    addItem(newItem: IProduct): void {
        const existProduct = this.items.filter((item) => item.slug === newItem.slug)[0];
        if (existProduct) {
            existProduct.count += newItem.count;
        } else {
            this.items.push({
                slug: newItem.slug,
                title: newItem.title,
                price: newItem.price,
                count: newItem.count,
            });
        }
    }

    increment(value: number): void {
        this.count += value;
    }
}

const CartStoreContext = createContext<CartStore>(new CartStore());

const CartStoreProvider: React.FC<{ store: CartStore }> = ({ store, children }) => {
    return <CartStoreContext.Provider value={store}>{children}</CartStoreContext.Provider>;
};

const useCartStore = (): CartStore => {
    return useContext(CartStoreContext);
};

export { CartStore, CartStoreProvider, useCartStore };
