const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  server: isProd ? 'https://eapp.vercel.app' : 'http://localhost:3000',
}
