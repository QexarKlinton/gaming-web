import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/game/:id"
          element={
            <ProtectedRoute>

              <GameDetails />

            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

      {/* GIF FLOTANTE */}
      <img
        src="/bocchi.gif"
        alt="Bocchi"
        className="fixed bottom-5 right-5 w-28 z-50 pointer-events-none"
      />

    </BrowserRouter>

  )

}

export default App