// Base
import React, { useEffect, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { listPeliculasAsync,} from '../redux/actions/actionsPeliculas'
import PaginacionTabs from './PaginacionTabs'

// Components
import TarjetaPelicula from './TarjetaPelicula'

const ListarPeliculas = () => {
  const dispatch = useDispatch()
  const [paginaActual, setPaginaActual] = useState(1)
  const TOTAL_POR_PAGINA = 15

  const { peliculas } = useSelector(store => store.peliculasStore)

  useEffect(() => {
    dispatch(listPeliculasAsync())
  },[dispatch])

  const cargarPeliculas = () => {
    const pelicula = peliculas.slice (
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    )
    return pelicula
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length
    console.log(cantidadTotalDePeliculas)
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA)
  }

  const peliPagina = cargarPeliculas()

  return (
    <div>
      <h2 className="mt-14 mb-12 text-5xl font-bold font-bold text-white">
        Todas las peliculas
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
        {peliPagina.map((pelicula, index ) => (
          <TarjetaPelicula
            key={index}
            id={pelicula.id}
            image={pelicula.poster_path}
            vote={pelicula.vote_average}
            {...pelicula}
          />
        ))}
      </div>

      <PaginacionTabs
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina)
        }}
      />
    </div>
  )
}

export default ListarPeliculas
