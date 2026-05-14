import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem('user')
  )

  const handleLogout = () => {

    localStorage.removeItem('token')
    localStorage.removeItem('user')

    navigate('/login')

  }

  return (

    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="text-3xl font-black text-white"
        >

          Game<span className="text-purple-500">Zone</span>

        </Link>

        {/* MENU */}

        <div className="flex items-center gap-5">

          {user ? (

            <>
              <p className="text-slate-300 text-lg">

                👾 {user.username}

              </p>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-xl text-white font-bold"
              >

                Logout

              </button>
            </>

          ) : (

            <>
              <Link
                to="/login"
                className="text-slate-300 hover:text-white transition"
              >

                Login

              </Link>

              <Link
                to="/register"
                className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-xl text-white font-bold"
              >

                Register

              </Link>
            </>

          )}

        </div>

      </div>

    </nav>

  )

}

export default Navbar