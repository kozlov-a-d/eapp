export default function absoluteUrl(relativeUrl: string): string {
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.VERCEL_URL;
    return url + relativeUrl;
}
