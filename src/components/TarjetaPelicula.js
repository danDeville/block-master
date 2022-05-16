// Base
import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import { StarIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TarjetaPelicula = (props) => {
  return (
    <Link
      to={`/detail/${props.id}`}
      style={{ textDecoration: 'none', color: 'transparent', zIndex: 0}}
    >
      <aside className="z-0 relative w-full h-[330px] rounded-lg">
        <img
          className="w-full h-[330px] object-cover rounded-lg"
          src={props.image}
          alt="Cover Película"
        />

        <div
          className={classNames(
            props.vote >= 7
            ? 'border-y-primary border-r-primary border-l-transparent'
            : 'border-y-quaternary border-r-quaternary border-l-transparent',
            ' absolute top-6 left-0 flex flex-row items-center justify-center w-28 h-16 bg-black/50 border-2 rounded-r-full'
          )}
        >
          <StarIcon className="h-6 w-6 text-primary mr-2"/>
          <p
            className="
              mb-0 text-white
              font-['Montserrat'] font-bold text-[28px]
            "
          >
            {props.vote}
          </p>
        </div>
      </aside>
    </Link>

  )
}

export default TarjetaPelicula