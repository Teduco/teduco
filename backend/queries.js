const Pool = require('pg').Pool
const pool = new Pool({
  user: 'teduco',
  database: 'teduco-pg',
  password: 'teduco123',
  port: 5432,
})

const addUser = (request, response) => {
  
  const {name, email} = request.body
  pool.query('insert into public.users (name, email) values ($1, $2) returning *', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

const getUsers = (request, response) => {
    pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
    addUser,
}