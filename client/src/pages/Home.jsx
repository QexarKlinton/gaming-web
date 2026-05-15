import { useState, useEffect } from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'
import Navbar from '../components/Navbar'

function Home() {

  const [games, setGames] = useState([])
  const [search, setSearch] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')

  // OBTENER JUEGOS DESDE API

  useEffect(() => {

    axios
      .get('https://gaming-web-api.onrender.com/games')

      .then((response) => {

        setGames(response.data)

      })

      .catch((error) => {

        console.log(error)

      })

  }, [])

  // FILTROS

  const filteredGames = games.filter((game) => {

    const matchesSearch =
      game.title.toLowerCase().includes(search.toLowerCase())

    const matchesGenre =
      selectedGenre === 'Todos' ||
      game.genre === selectedGenre

    return matchesSearch && matchesGenre

  })

  return (

    <>

      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

        {/* HERO */}
        <section className="relative border-b border-slate-800">

          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-slate-950"></div>

          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* TEXTO */}
              <div>

                <p className="text-purple-400 font-bold text-lg lg:text-xl mb-4 tracking-widest">

                  NEW GEN GAMING

                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">

                  Explora el
                  <span className="text-purple-500">
                    {' '}universo gamer
                  </span>

                </h1>

                <p className="text-slate-400 text-lg md:text-2xl mb-10 leading-relaxed max-w-2xl">

                  Descubre videojuegos, reseñas, críticas y las mejores
                  experiencias gaming del momento.

                </p>

                <div className="flex flex-wrap gap-5">

                  <button className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-purple-500/30">

                    Explorar Juegos

                  </button>

                  <button className="border border-slate-600 hover:border-purple-500 transition px-8 py-4 rounded-2xl text-lg font-bold">

                    Ver Reviews

                  </button>

                </div>

              </div>

              {/* IMAGEN */}
              <div className="relative">

                <div className="absolute -inset-4 bg-purple-600 blur-3xl opacity-20 rounded-full"></div>

                <img
                  src="https://images.ctfassets.net/rbl6nw8n2c6i/5BNkTpdOEFzF8aAwIZis97/381e3e39db7f34aa0d413ed8295dd051/gaming_article.png"
                  alt="gaming"
                  className="relative rounded-3xl shadow-2xl hover:scale-105 transition duration-500 w-full"
                />

              </div>

            </div>

          </div>

        </section>

        {/* JUEGOS */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-14">

            Juegos Destacados

          </h2>

          {/* BUSCADOR Y FILTRO */}
          <div className="flex flex-col lg:flex-row gap-5 mb-12">

            <input
              type="text"
              placeholder="Buscar videojuego..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 w-full text-lg outline-none focus:border-purple-500"
            />

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-lg outline-none focus:border-purple-500"
            >

              <option>Todos</option>
              <option>Shooter</option>
              <option>Terror</option>
              <option>RPG</option>
              <option>Sci-Fi</option>

            </select>

          </div>

          {/* GRID DE JUEGOS */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10">

            {filteredGames.map((game) => (

              <GameCard
                key={game.id}
                game={game}
              />

            ))}

          </div>

        </section>

      </div>

      {/* PERSONAJE FLOTANTE */}

<div className="fixed bottom-6 right-6 z-50 hidden lg:block">

  <div className="relative">

    {/* GLOW */}
    <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>

    <img
      src="https://media.tenor.com/uG9H9qWU-TwAAAAj/bocchi-bocchi-the-rock.gif"
      alt="character"
      className="relative w-72 hover:scale-110 transition duration-500 drop-shadow-[0_0_35px_rgba(168,85,247,0.7)]"
    />

  </div>

</div>

    </>

  )

}

export default Home