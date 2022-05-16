// Base
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'

// Hook
import useForm from '../hook/useForm'
import { addPeliculaAsync } from '../redux/actions/actionsPeliculas'
import { FileUpload } from '../utils/fileUpload'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})


const CrearPeliculas = ({setModal}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
    window.location.reload(true)
  }

  const [formValue, handleInputChange, reset] = useForm({
    id: '',
    genre: '',
    original_language: '',
    original_title: '',
    overview: '',
    poster_path: '',
    vote_average: '',
    video: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPeliculaAsync(formValue))
    reset()
    handleClose()
    setTimeout(() => {
      window.location.reload()
    }, 1500)

  }

  const { id, genre, original_language, original_title, overview, poster_path, vote_average, video } = formValue

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    FileUpload(file)
    .then(response => {
      formValue.poster_path = response
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <header className="flex items-center justify-between px-5 py-4">
        <DialogTitle style={{ padding: 0 }}>
          Nueva Película
        </DialogTitle>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </header>

      <DialogContent style={{width: "100%", maxWidth:"600px"}}>
        <form onSubmit={handleSubmit}>
          <label className='block my-2'>Id Película</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='number'
            placeholder='id'
            name='id'
            value={id}
            onChange={handleInputChange}
          />

          <label className='block my-2'>Genero de la película</label>
          <select
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            name='genre'
            value={genre}
            onChange={handleInputChange}
          >
            <option value='null' name='Seleccionar Genero'>
              Seleccionar
            </option>
            <option value='Accion' name='Accion'>Accion</option>
            <option value='Aventura' name='Aventura'>Aventura</option>
            <option value='Sci-Fi' name='Sci-Fi'>Sci-Fi</option>
            <option value='Comedia' name='Comedia'>Comedia</option>
            <option value='Drama' name='Drama'>Drama</option>
            <option value='Terror' name='Terror'>Terror</option>
            <option value='Romance' name='Romance'>Romance</option>
            <option value='Musical' name='Musical'>Musical</option>
            <option value='Fantasia' name='Fantasia'>Fantasia</option>
          </select>

          <label className='block my-2'>Título de la película</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='text'
            placeholder='Titulo'
            name='original_title'
            value={original_title}
            onChange={handleInputChange}
          />

          <label className='block my-2'>Idioma</label>
          <select
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            name='original_language'
            value={original_language}
            onChange={handleInputChange}
          >
            <option value='null' name='Seleccionar Genero'>
              Seleccionar
            </option>

            <option value='en' name='en'>Ingles</option>
            <option value='es' name='es'>Español</option>
            <option value='fr' name='fr'>Frances</option>
            <option value='it' name='it'>Italiano</option>
            <option value='de' name='de'>Aleman</option>
            <option value='pt' name='pt'>Portugues</option>
            <option value='ja' name='ja'>Japones</option>
          </select>

          <label className='block my-2'>Resumen de la película</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='text'
            placeholder='Resumen'
            name='overview'
            value={overview}
            onChange={handleInputChange}
          />

          <label className='block my-2'>Calificación de la película</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='number'
            placeholder='Puntaje'
            name='vote_average'
            value={vote_average}
            onChange={handleInputChange}
          />

          <label className='block my-2'>Trailer</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='text'
            placeholder='Trailer'
            name='video'
            value={video}
            onChange={handleInputChange}
          />


          <label className='block my-2'>Poster Pelicula</label>
          <input
            className='
              block w-full text-sm text-white
              file:py-2 file:px-4 file:w-full
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-white file:border file:shadow-sm file:border-primary
              file:text-black
            '
            type='file'
            placeholder='Imagen'
            name='poster_path'
            value={poster_path}
            onChange={handleFileUpload}
          />

          <button
            type='submit'
            className='
              w-full h-11 mt-4 text-center font-medium
              text-black bg-primary rounded-md
            '
          >
            Crear Película
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CrearPeliculas
