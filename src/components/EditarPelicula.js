import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editPeliculaAsync, editPeliculaSync } from '../redux/actions/actionsPeliculas'
import useForm from '../hook/useForm'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { Box, Input, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const EditarPelicula = ({datos, setModal}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [formValue, handleInputChange, reset] = useForm({
    id: datos.id,
    genre: datos.genre,
    original_language: datos.original_language,
    original_title: datos.original_title,
    overview: datos.overview,
    vote_average: datos.vote_average,
    video: datos.video,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    dispatch(editPeliculaAsync(formValue))
    handleClose()
    reset()
    window.location.reload(true)
  }

  const { id, genre, original_language, original_title, overview, vote_average, video } = formValue

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0]
  //   FileUpload(file)
  //   .then(response => {
  //     formValue.poster_path = response
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })
  // }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Editar Película</DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <InputLabel
            htmlFor="component-simple"
            className="my-2"
          >
            Id
          </InputLabel>
          <TextField
            type="text"
            placeholder="id"
            size="small"
            variant="outlined"
            className="w-full"
            name="id"
            defaultValue={id}
            onChange={handleInputChange}
          />

          <InputLabel
            htmlFor="component-simple"
            className="my-2"
          >
            Genero de la película
          </InputLabel>

          <input
            type="text"
            placeholder="Titulo"
            size="small"
            variant="outlined"
            className="w-full"
            name="original_title"
            defaultValue={genre}
            onChange={handleInputChange}
          />

          <InputLabel
            htmlFor="component-simple"
            className="my-2"
          >
            Título de la película
          </InputLabel>
          <TextField
            type="text"
            placeholder="Titulo"
            size="small"
            variant="outlined"
            className="w-full"
            name="original_title"
            defaultValue={original_title}
            onChange={handleInputChange}
          />

          <InputLabel
            htmlFor="component-simple"
            className="my-2"
          >
            Idioma de la película
          </InputLabel>

          <TextField
            type="text"
            placeholder="Resumen"
            size="small"
            variant="outlined"
            className="w-full"
            name="overview"
            defaultValue={original_language}
            onChange={handleInputChange}
          />

          <InputLabel
            htmlFor="component-simple"
            className="my-2"
          >
            Resumen de la película
          </InputLabel>
          <TextField
            type="text"
            placeholder="Resumen"
            size="small"
            variant="outlined"
            className="w-full"
            name="overview"
            defaultValue={overview}
            onChange={handleInputChange}
          />

          <InputLabel
            htmlFor="component-simple"
            className="my-2"
          >
            Calificación de la película
          </InputLabel>
          <TextField
            type="number"
            placeholder="Puntaje"
            size="small"
            variant="outlined"
            className="w-full"
            name="vote_average"
            defaultValue={vote_average}
            onChange={handleInputChange}
          />

          <InputLabel
            htmlFor="component-simple"
            className="my-2"
          >
            Trailer de la película
          </InputLabel>
          <TextField
            type="text"
            placeholder="Trailer"
            size="small"
            variant="outlined"
            className="w-full"
            name="video"
            defaultValue={video}
            onChange={handleInputChange}
          />

          <button type="submit">Editar</button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditarPelicula