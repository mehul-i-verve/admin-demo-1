const env = process.env.NODE_ENV || 'local';

const masterConfig = {
  local: {
    server_url: 'https://4710-2409-40c1-5f-13a-155c-a6f0-315d-6ce8.ngrok-free.app/api',
    BASE_URL: 'http://localhost:3000',
  },
  staging: {
    server_url: 'https://staging-api.selfrideinc.com',
    BASE_URL: 'https://staging-api.selfrideinc.com',
  },
  prod: {
    server_url: 'https://api.selfrideinc.com',
    BASE_URL: 'https://api.selfrideinc.com',
  },
};

export const { server_url, BASE_URL } =
  masterConfig[env as keyof typeof masterConfig];
export const SERVER_ENV = env;
