import type { NextApiRequest, NextApiResponse } from 'next';
import { Pages } from '../../db/pages';

// /api/[slug]
// НЕ РАБОТАЕТ НА ПРОДЕ, абсолютный урл у апи типа должен быть!!!!!!!!!!!!!!!!!!!

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;
    const selectedPage = Pages.filter((page) => page.slug === slug)[0];
    res.status(200).json(selectedPage);
};
