export type ProductPreviewType = {
    id: number;
    title: string;
    image: string;
    link: string;
    slug: string;
    price: number;
    priceFull?: number;
};

export type ProductListType = Array<ProductPreviewType>;

export const ProductList: ProductListType = [
    {
        id: 0,
        title: 'First Product',
        link: '/products/first-product',
        slug: 'first-product',
        price: 40,
        priceFull: 60,
        image: 'https://i.etsystatic.com/20783191/r/il/a701bc/2333118618/il_570xN.2333118618_oyct.jpg',
    },
    {
        id: 1,
        title: 'Second Product',
        link: '/products/second-product',
        slug: 'second-product',
        price: 440,
        image: 'https://i.etsystatic.com/20783191/r/il/52ee13/2181892066/il_570xN.2181892066_i12j.jpg',
    },
    {
        id: 2,
        title: 'Other Product with Long Title FooBar',
        link: '/products/other-product',
        slug: 'other-product',
        price: 410,
        priceFull: 560,
        image: 'https://dijf55il5e0d1.cloudfront.net/images/na/1/4/0/14024_1000.jpg',
    },
];
