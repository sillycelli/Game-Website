/*
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'paishoserver',
  password: 'PaiShoWebsite!',
  port: 5432,
});
*/
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'paishoserver',
  password: 'PaiShoWebsite!',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'paishoserver',
  password: 'PaiShoWebsite!',
  port: 5432,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

/*
 const getAccounts = () => {
  pool.connect(function(err) {
    if (err) throw err;
    pool.query("SELECT * FROM accounts", function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
    });
  });
  */
//   return new Promise(function(resolve, reject) {
//     pool.query('SELECT * FROM accounts', (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(results.rows);
//     })
//   }) 
// }
/*
module.exports = {
  getAccounts,
}*/