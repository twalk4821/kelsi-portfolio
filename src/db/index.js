const { Pool } = require('pg');

const pool = new Pool({
  user: 'kelsi',
  password: 'portfolio',
  host: 'portfolio.cv6sapo8vhre.us-east-2.rds.amazonaws.com',
  database: 'portfolio',
  port: 5432
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});

module.exports = pool;

// psql --host=portfolio.cv6sapo8vhre.us-east-2.rds.amazonaws.com  --port=5432  --username=kelsi --password --dbname=portfolio 