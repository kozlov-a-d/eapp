export type PagesType = {
    id: number;
    heading: string;
    link: string;
    slug: string;
    content: string;
};

export const Pages: PagesType[] = [
    { id: 0, heading: 'About', link: '/about', slug: 'about', content: 'lorem 1' },
    { id: 1, heading: 'Contact Us', link: '/contacts', slug: 'contacts', content: 'lorem 2' },
    { id: 2, heading: 'Textpage', link: '/textpage', slug: 'textpage', content: 'lorem 3' },
];
