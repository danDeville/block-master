
// Base
import React, { useEffect } from 'react'

// Components
import { Carousel } from 'react-responsive-carousel'

// Material UI
import { Button, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'

// Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'

// Styles
import { styled } from '@mui/material/styles'
const MoreButton = styled(Button)({
  backgroundColor: '#000',
  color: '#FED941',
  border: '1px solid #FED941',
  cursor: 'pointer',
})

const CarouselPeliculas = () => {
  const { peliculas } = useSelector(store => store.peliculasStore)

  const peliculasCarousel = peliculas.slice(0, 5)

  return (
    <Carousel showArrows={true} autoPlay showThumbs={false}>
      {peliculas.length === 0
        ? (
          <div className="w-full h-full flex items-center justify-center">
            <CircularProgress />
          </div>
        )
        : (
          peliculasCarousel.map((pelicula, index) => (
            <div
              key={index}
              id={pelicula.id}
              className="relative w-full h-[350px] mb-10 rounded-md"
            >
              <img
                className="
                  w-full h-[350px]
                  object-cover object-center
                  rounded-md
                "
                src={pelicula.poster_path}
                alt="Movie Cover"
              />

              <section
                className="
                  absolute bottom-8 left-6
                  flex flex-row items-center justify-between
                  w-[96%]
                "
              >
                <div
                  className="
                    grid grid-cols-2 gap-4
                  "
                >
                  <Button
                    startIcon={<PlayArrowIcon />}
                    variant="contained"
                    size="medium"
                  >
                    Ver Ahora
                  </Button>
                  <MoreButton
                    className="text-primary"
                    startIcon={<AddIcon />}
                    size="medium"
                    variant="contained"
                    color="black"
                  >
                    Ver Después
                  </MoreButton>
                </div>

                <p
                  className="
                    text-right text-2xl
                    text-white font-medium
                    bg-black/50
                  "
                >
                  {pelicula.original_title}
                </p>
              </section>
            </div>
          ))
        )
      }
    </Carousel>
  )
}

export default CarouselPeliculas
