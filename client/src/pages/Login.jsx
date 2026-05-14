import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    email: '',
    password: ''

  })

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await axios.post(

        'http://localhost:5000/login',

        formData

      )

      // GUARDAR TOKEN

      localStorage.setItem(
        'token',
        response.data.token
      )

      // GUARDAR USER

      localStorage.setItem(
        'user',
        JSON.stringify(response.data.user)
      )

      alert('Login exitoso 🚀')

      navigate('/')

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Error al iniciar sesión'
      )

    }

  }

  return (

    <>
  <Navbar />

  <div>
    ...
  </div>

    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-10 rounded-3xl w-full max-w-md"
      >

        <h1 className="text-4xl font-black text-white mb-8 text-center">

          Iniciar Sesión

        </h1>

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-5 bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-8 bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-500"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl text-xl font-bold text-white"
        >

          Entrar

        </button>

      </form>

    </div>

</>
  )
}

export default Login