let con = {
  "production": {
    "username": `${process.env.DB_USERNAME}`,
    "password": `${process.env.DB_PASS}`,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports = con
