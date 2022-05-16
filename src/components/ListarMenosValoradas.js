// Base
import React, { useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { listPeliculasAsync, } from '../redux/actions/actionsPeliculas'

// Components
import TarjetaPelicula from './TarjetaPelicula'

const ListarMenosValoradas = () => {
  const dispatch = useDispatch()
  const { peliculas } = useSelector(store => store.peliculasStore)

  useEffect(() => {
    dispatch(listPeliculasAsync())
  }, [dispatch])

  const pelicula = peliculas.filter((pelicula) => pelicula.vote_average < 7)
  console.log(pelicula)

  return (
    <>
      <h2 className="mt-14 mb-12 text-5xl font-bold font-bold text-white">
        Peliculas menos valoradas
      </h2>

      <div
        className="
          w-full h-full z-0
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5
          gap-6 gap-y-12 grid-flow-row auto-rows-max
          justify-items-stretch
          overflow-x-hidden
        "
      >
        {
          pelicula.map((pelicula, index) => (
            <TarjetaPelicula
              key={index}
              id={pelicula.id}
              image={pelicula.poster_path}
              vote={pelicula.vote_average}
              {...pelicula}
            />
          ))
        }
      </div>
    </>
  )
}

export default ListarMenosValoradas
