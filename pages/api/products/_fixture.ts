export type ProductPreviewType = {
    id: number;
    title: string;
    link: string;
    slug: string;
    price: number;
};

export type ProductListType = Array<ProductPreviewType>;

export const ProductList: ProductListType = [
    { id: 0, title: 'First Product', link: '/products/first-product', slug: 'first-product', price: 40 },
    { id: 1, title: 'Second Product', link: '/products/second-product', slug: 'second-product', price: 440 },
    { id: 2, title: 'Other Product', link: '/products/other-product', slug: 'other-product', price: 410 },
];
