import mysql from "mysql2/promise";
async function main() {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: "", database: 'myblog' });
    const [rows, fields] = await connection.execute('SELECT * FROM Posts');
    console.log(rows);
}
main();