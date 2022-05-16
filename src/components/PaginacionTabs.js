
import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PaginacionTabs = (props) => {
  const getPaginas = () => {
    const resultado = []
    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1
      resultado.push(
        <button
          onClick={() => props.onChange(pagina)}
          // className={ ? 'active' : ' '}

          className={classNames(
            props.pagina === pagina
            ? 'text-backgorund bg-primary'
            : 'text-white hover:text-primary bg-gray-100/40',
            'w-8 h-8 rounded-full mx-4 text-lg font-medium'
          )}
        >
          {pagina}
        </button>
      )
    }
    return resultado
  }

  return (
    <div className="w-full h-8 text-center my-8">
      <div className="flex flex-col">
        <p className="mb-3 text-lg text-white font-medium">
          Página {props.pagina} de {props.total}
        </p>

        <div className="flex justify-center">
          {getPaginas()}
        </div>
      </div>
    </div>
  )
}

export default PaginacionTabs
