import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

function GameDetails() {

  const { id } = useParams()

  const [game, setGame] = useState(null)

  useEffect(() => {

    axios
    .get(`https://gaming-web-api.onrender.com/games/${id}`)

      .then((response) => {

        setGame(response.data)

      })

      .catch((error) => {

        console.log(error)

      })

  }, [id])

  if (!game) {

    return (

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-3xl">

        Cargando videojuego...

      </div>

    )

  }

  return (

    <>

      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">

        <div className="w-full max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-20">

          {/* IMAGEN */}
          <div>

            <img
              src={game.image}
              alt={game.title}
              className="rounded-3xl shadow-2xl"
            />

          </div>

          {/* INFO */}
          <div>

            <p className="text-purple-400 text-xl font-bold mb-3">
              {game.genre}
            </p>

            <h1 className="text-6xl font-black mb-6">
              {game.title}
            </h1>

            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              {game.description}
            </p>

            <div className="flex gap-8 mb-10">

              <div className="bg-slate-900 p-5 rounded-2xl">

                <p className="text-slate-400">
                  Rating
                </p>

                <h3 className="text-3xl font-bold text-purple-500">
                  {game.rating}
                </h3>

              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">

                <p className="text-slate-400">
                  Precio
                </p>

                <h3 className="text-3xl font-bold text-purple-500">
                  {game.price}
                </h3>

              </div>

            </div>

            <div className="flex gap-5">

              <a
                href={game.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl text-xl font-bold inline-block"
              >

                Comprar

              </a>

              <a
                href={game.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-purple-500 transition px-8 py-4 rounded-2xl text-xl font-bold"
              >

                Ver Trailer

              </a>

            </div>

          </div>

        </div>

      </div>

    </>

  )

}

export default GameDetails