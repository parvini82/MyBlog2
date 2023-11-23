import { Database } from "./types.ts"; // this is the Database interface we defined earlier
import { createPool } from "mysql2"; // do not use 'mysql2/promises'!
import { Kysely, MysqlDialect } from "kysely";
import dotenv from "dotenv";

dotenv.config();
const dialect = new MysqlDialect({
	pool: createPool({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	}),
});
// const dialect = new MysqlDialect({
// 	pool: createPool({
// 		host: "localhost",
// 		user: "root",
// 		password: "",
// 		database: "myblog",
// 		port: 3308,
// 		connectionLimit: 10,
// 	}),
// });
console.log(dialect);
export const db = new Kysely<Database>({
	dialect,
});
console.log(db);
