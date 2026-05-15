import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    username: '',
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

      await axios.post(

        'https://gaming-web-api.onrender.com/register',

        formData

      )

      alert('Usuario registrado correctamente 🚀')

      navigate('/login')

    } catch (error) {

      alert(

        error.response?.data?.message ||
        'Error al registrar usuario'

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

          Crear Cuenta

        </h1>

        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-5 bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-500"
        />

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

          Registrarse

        </button>

        <p className="text-slate-400 text-center mt-6">

          ¿Ya tienes cuenta?

          <Link
            to="/login"
            className="text-purple-400 ml-2 hover:text-purple-300"
          >

            Inicia sesión

          </Link>

        </p>

      </form>

    </div>

</> )

}

export default Register