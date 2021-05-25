import type { NextApiRequest, NextApiResponse } from 'next';
import { Pages } from './_fixture';

// /api/products

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(Pages);
};
