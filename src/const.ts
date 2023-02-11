// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const env = {
  xprokatApiKey: process.env.XPROKAT_API_KEY,
  xprokatApiUrl: process.env.XPROKAT_URL,
};
