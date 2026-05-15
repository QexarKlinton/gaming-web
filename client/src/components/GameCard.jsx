import { Link } from 'react-router-dom'

function GameCard({ game }) {

  return (

    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

      {/* IMAGEN */}

      <img
        src={game.image}
        alt={game.title}
        className="w-full h-80 object-cover"
      />

      {/* CONTENIDO */}

      <div className="p-6">

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-2xl font-black text-white">

            {game.title}

          </h2>

          <span className="bg-purple-600 px-3 py-1 rounded-xl text-sm font-bold text-white">

            ⭐ {game.rating}

          </span>

        </div>

        <p className="text-slate-400 mb-5">

          {game.description}

        </p>

        <div className="flex items-center justify-between">

          <span className="text-2xl font-black text-purple-400">

            {game.price}

          </span>

          <Link
              to={`/game/${game.id}`}
              className="bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-xl text-white font-bold"
            >

              Ver más

            </Link>

        </div>

      </div>

    </div>

  )

}

export default GameCard