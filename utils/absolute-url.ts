export default function absoluteUrl(relativeUrl: string): string {
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'eapp-rn03w1znp-kozlov-a-d.vercel.app';
    return url + relativeUrl;
}
