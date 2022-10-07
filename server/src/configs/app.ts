export const MAIN = {
  APP_PORT: Number(process.env.PORT) || 8080,
  HOST: process.env.HOST || '0.0.0.0',
  MODE:
    (['test', 'development', 'production'].includes(process.env.NODE_ENV) &&
      process.env.NODE_ENV) ||
    'development',
};
