export const SERVICES = {
  GATEWAY: {
    HOST: process.env.GATEWAY_SERVICE_HOST || 'localhost',
    PORT: Number(process.env.GATEWAY_SERVICE_PORT) || 3000,
  },

  CATALOG: {
    HOST: 'localhost',
    PORT: 4001,
  },

  INVENTORY: {
    HOST: 'localhost',
    PORT: 4002,
  },

  USER: {
    HOST: 'localhost',
    PORT: 4003,
  },
};
