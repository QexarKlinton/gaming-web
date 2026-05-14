require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cors())
app.use(express.json())

const mysql = require("mysql2")

const db = mysql.createPool({

  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  ssl: {
    rejectUnauthorized: false
  }

})
db.getConnection((err, connection) => {

  if (err) {
    console.log("❌ Error MySQL:", err)
  } else {
    console.log("✅ MySQL conectado")
    connection.release()
  }

})

// VERIFICAR CONEXIÓN

db.connect((err) => {

  if (err) {
    console.log('Error de conexión:', err)
    return
  }

  console.log('MySQL conectado 🚀')

})

// RUTA PRINCIPAL

app.get('/', (req, res) => {

  res.json({
    message: 'Servidor funcionando 🚀'
  })

})

// OBTENER TODOS LOS JUEGOS

app.get('/games', (req, res) => {

  const sql = 'SELECT * FROM games'

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json(result)

  })

})

// OBTENER UN SOLO JUEGO

app.get('/games/:id', (req, res) => {

  const { id } = req.params

  const sql = 'SELECT * FROM games WHERE id = ?'

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    if (result.length === 0) {

      return res.status(404).json({
        message: 'Juego no encontrado'
      })

    }

    res.json(result[0])

  })

})

// REGISTRO DE USUARIOS

app.post('/register', async (req, res) => {

  try {

    const { username, email, password } = req.body

    // VALIDAR CAMPOS

    if (!username || !email || !password) {

      return res.status(400).json({
        message: 'Todos los campos son obligatorios'
      })

    }

    // VERIFICAR EMAIL

    const checkSql = 'SELECT * FROM users WHERE email = ?'

    db.query(checkSql, [email], async (err, result) => {

      if (err) {
        return res.status(500).json(err)
      }

      if (result.length > 0) {

        return res.status(400).json({
          message: 'El email ya existe'
        })

      }

      // ENCRIPTAR PASSWORD

      const hashedPassword = await bcrypt.hash(password, 10)

      // INSERTAR USUARIO

      const insertSql = `
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)
      `

      db.query(

        insertSql,

        [username, email, hashedPassword],

        (err, result) => {

          if (err) {
            return res.status(500).json(err)
          }

          res.status(201).json({

            message: 'Usuario registrado correctamente'

          })

        }

      )

    })

  } catch (error) {

    res.status(500).json(error)

  }

})

app.post('/login', (req, res) => {

  const { email, password } = req.body

  // VALIDAR CAMPOS

  if (!email || !password) {

    return res.status(400).json({
      message: 'Todos los campos son obligatorios'
    })

  }

  // BUSCAR USUARIO

  const sql = 'SELECT * FROM users WHERE email = ?'

  db.query(sql, [email], async (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    // SI NO EXISTE

    if (result.length === 0) {

      return res.status(400).json({
        message: 'Usuario no encontrado'
      })

    }

    const user = result[0]

    // COMPARAR PASSWORD

    const isMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!isMatch) {

      return res.status(400).json({
        message: 'Contraseña incorrecta'
      })

    }

    // GENERAR TOKEN JWT

    const token = jwt.sign(

      {
        id: user.id,
        email: user.email
      },

      process.env.JWT_SECRET,

      {
        expiresIn: '7d'
      }

    )

    // RESPUESTA

    res.json({

      message: 'Login exitoso',

      token,

      user: {

        id: user.id,
        username: user.username,
        email: user.email

      }

    })

  })

})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(`Servidor corriendo en puerto ${PORT}`)

})