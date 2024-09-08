import { DataSource } from "typeorm";

const {
  DATABASE_USER,
  DATABASE_PASS,
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PORT,
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DATABASE_HOST,
  port: DATABASE_PORT ? parseInt(DATABASE_PORT) : 5432,
  username: DATABASE_USER,
  password: DATABASE_PASS,
  database: DATABASE_NAME,
});
