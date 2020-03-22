export default {
  oneauth: {
    url: process.env.ONEAUTH_URL || 'https://account.codingblocks.com',
    clientId: process.env.ONEAUTH_CLIENT_ID || '',
    clientSecret: process.env.ONEAUTH_CLIENT_SECRET || '',
  },
  app: {
    url: process.env.APP_URL || 'http://localhost:3000',
  },
};
