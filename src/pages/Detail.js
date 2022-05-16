// Base
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { deletePeliculaAsync, listPeliculasAsync } from "../redux/actions/actionsPeliculas"

// Icons
import { StarIcon } from "@heroicons/react/solid"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import AddIcon from "@mui/icons-material/Add"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import MoreVertIcon from "@mui/icons-material/MoreVert"

// Material UI
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material"

// Components
import EditarPelicula from "../components/EditarPelicula"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Detail = () => {
  const navegate = useNavigate()

  // Menu
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // Modal
  let [modal, setModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleClickOpen = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Manejo de edición
  let [datos, setDatos] = useState([])

  const editar = (pelicula) => {
    setModal(true)
    setDatos(pelicula)
  }

  const handleDelete = () => {
    dispatch(deletePeliculaAsync(pelicula.id))
    handleCloseModal()
    navegate("/")
  }

  const handleReturn = () => {
    navegate(-1)
  }

  const dispatch = useDispatch()
  const { id } = useParams()
  const { peliculas } = useSelector((store) => store.peliculasStore)
  console.log(peliculas)

  useEffect(() => {
    dispatch(listPeliculasAsync(id))
  }, [dispatch])

  if (!peliculas) return <div>Cargando...</div>

  const pelicula = peliculas.find((pelicula) => pelicula.id == id)
  console.log(pelicula)

  return (
    <div className="z-20 w-screen h-screen bg-background">
      {pelicula === undefined ? (
        <div
          className="flex justify-center items-center w-screen h-screen">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div
            className="
              z-10 fixed top-0 left-0
              w-screen h-screen overflow-y-auto
              bg-background text-white font-['Montserrat']
            "
          >
            <div
              className="
                w-full h-full max-w-[1470px]
                mx-auto my-0 mt-[80px] p-6
              "
            >
              <header className="flex items-center justify-between mb-10">
                <IconButton
                  onClick={handleReturn}
                  aria-label="back"
                  size="large"
                  color="secondary"
                >
                  <ArrowBackIosIcon />
                </IconButton>

                <IconButton
                  aria-label="More"
                  size="large"
                  color="secondary"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon />

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => editar(pelicula)}>Editar Película</MenuItem>
                    <MenuItem onClick={handleClickOpen}>Eliminar Película</MenuItem>
                  </Menu>
                </IconButton>
              </header>

              <section className="flex flex-row justify-center items-start gap-6">
                <div className="w-1/2 h-full flex justify-center">
                  <figure className="relative w-[282px] h-[403px] m-0 skew-y-12 skew-x-12 -rotate-45">
                    <img
                      className="w-full h-full object-cover "
                      src={pelicula.poster_path}
                      alt="Cover Movie"
                    />
                    <div
                      className={classNames(
                        pelicula.vote_average >= 7
                          ? "border-y-primary border-r-primary border-l-transparent"
                          : "border-y-quaternary border-r-quaternary border-l-transparent",
                        " absolute top-6 left-0 flex flex-row items-center justify-center w-28 h-16 bg-black/50 border-2 rounded-r-full"
                      )}
                    >
                      <StarIcon className="h-6 w-6 text-primary mr-2" />
                      <p
                        className="
                          mb-0 text-white
                          font-['Montserrat'] font-bold text-[28px]
                        "
                      >
                        {pelicula.vote_average}
                      </p>
                    </div>
                  </figure>
                </div>

                <aside className="w-1/2">
                  <h2 className="text-5xl font-bold mb-4">
                    {pelicula.original_title}
                  </h2>
                  <p className="text-lg mb-4">{pelicula.overview}</p>

                  <div className="text-lg mb-10">
                    <span
                      className="
                        after: after:content-['o']
                        after:bg-white after:rounded-full
                        after:text-xs after:font-bold
                        after:w-1 after:h-0.5
                        after:m-5
                      "
                    >
                      {pelicula.genre}
                    </span>
                    <span>Idioma: {pelicula.original_language}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      startIcon={<PlayArrowIcon />}
                      variant="contained"
                      size="medium"
                    >
                      Ver Ahora
                    </Button>
                    <Button
                      className="text-primary"
                      startIcon={<AddIcon />}
                      size="medium"
                      variant="contained"
                      color="black"
                    >
                      Ver Después
                    </Button>
                  </div>
                </aside>
              </section>
            </div>
          </div>

          <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDelete}>
                Agree
              </Button>
            </DialogActions>
          </Dialog>

        {
          modal === true
          ? <EditarPelicula datos={datos} setModal={setModal} />
          : ''
        }
        </>
      )}
    </div>
  )
}

export default Detail
