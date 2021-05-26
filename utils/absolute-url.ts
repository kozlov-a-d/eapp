export default function absoluteUrl(relativeUrl: string): string {
    const url = process.env.NODE_ENV === "development" ? process.env.SERVER_URI : `https://${process.env.VERCEL_URL}`;
    // const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://eapp-rn03w1znp-kozlov-a-d.vercel.app';
    return url + relativeUrl;
}
