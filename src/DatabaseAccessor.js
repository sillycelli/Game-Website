const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'paishoserver',
  password: 'PaiShoWebsite!',
  port: 5432,
});

const getAccounts = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM accounts', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

// const createMerchant = (body) => {
//   return new Promise(function(resolve, reject) {
//     const { name, email } = body
//     pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`A new merchant has been added added: ${results.rows[0]}`)
//     })
//   })
// }

module.exports = {
  getMerchants,
}