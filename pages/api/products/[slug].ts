import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductList } from './_fixture';

// /api/products/[slug]

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;
    const selectedProduct = ProductList.filter((product) => product.slug === slug)[0];
    // console.log('selectedProduct', selectedProduct);
    res.status(200).json(selectedProduct);
};
