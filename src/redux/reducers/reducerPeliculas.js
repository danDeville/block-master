import React from 'react'
import { typesPelicula } from '../types/typesPelicula'

const initialState = {
  peliculas: [],
}

const reducerPeliculas = (state=initialState, action) => {
  switch (action.type) {
    case typesPelicula.add:
      return {
        peliculas: [action.payload]
      }

    case typesPelicula.list:
      return {
        peliculas: [...action.payload]
      }

    case typesPelicula.edit:
      return {
        ...state,
      }

    case typesPelicula.detail:
      return {
        ...state,
      }

    case typesPelicula.delete:
      return {
        peliculas: state.peliculas.filter(pelicula => pelicula.id !== action.payload)
      }

    default:
      return state
  }
}

export default reducerPeliculas