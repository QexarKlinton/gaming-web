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

    </BrowserRouter>

  )

}

export default App