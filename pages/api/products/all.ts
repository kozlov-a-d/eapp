import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductList } from './_fixture';

// /api/products

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(ProductList);
};
