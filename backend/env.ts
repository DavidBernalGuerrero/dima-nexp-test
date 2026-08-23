import "dotenv/config";

export const env = {
  port: Number(process.env.BACKEND_PORT),
  baseUrl: process.env.BASE_API_URL,

  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
};