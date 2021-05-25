import type { NextApiRequest, NextApiResponse } from 'next';
import { Pages } from './_fixture';

// /api/products/[slug]

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;
    const selectedPage = Pages.filter((page) => page.slug === slug)[0];
    // console.log('selectedPage', selectedPage);
    res.status(200).json(selectedPage);
};
