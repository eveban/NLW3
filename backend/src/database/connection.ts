import { createConnection } from 'typeorm';

createConnection();
// const connection = knex({
//   // client: 'mysql',
//   // connection: {
//   //   host: 'localhost',
//   //   port: 14001,
//   //   user: 'root',
//   //   password: '123456',
//   //   database: 'ecoleta',
//   // },
//   client: 'sqlite3',
//   connection: {
//     filename: path.resolve(__dirname, 'database.sqlite'),
//   },
//   useNullAsDefault: true,
// });

// export default connection;
