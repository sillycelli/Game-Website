const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'paishoserver',
  password: 'PaiShoWebsite!',
  port: 5432,
});

 const getAccounts = () => {
  pool.connect(function(err) {
    if (err) throw err;
    pool.query("SELECT * FROM accounts", function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
    });
  });
  
//   return new Promise(function(resolve, reject) {
//     pool.query('SELECT * FROM accounts', (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(results.rows);
//     })
//   }) 
 }

module.exports = {
  getAccounts,
}