// Base
import React from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { registroAsync } from '../redux/actions/actionsLogin'

// Hook
import useForm from '../hook/useForm'

const RegistroForm = (props) => {
  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    contraseña: ''
  })

  const { nombre, email, contraseña } = formValue

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValue)
    dispatch(registroAsync(nombre, email, contraseña))
    reset()
  }

  return (
    <div>
      <section
        className="
          flex items-center justify-start
          w-full h-screen
          py-12 px-4 sm:px-6 lg:px-8
          bg-background
        "
      >
        <div className="w-full space-y-8">
          <div>
            <img
              className="h-20 w-auto"
              src="https://res.cloudinary.com/dz8on44po/image/upload/v1652149984/block-master/tolphiyeerfgawlt73du.png"
              alt="Workflow"
            />
            <h2
              className="
                mt-6 text-start text-3xl
                font-extrabold text-white
              "
            >
              Crea tu cuenta
            </h2>

            <p className="mt-2 text-start text-md text-white">
              Regístrate para continuar
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nombre de usuario
                </label>
                <input
                  name="nombre"
                  type="text"
                  value={nombre}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                  placeholder="Nombre de usuario"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 border border-white
                    bg-background
                    placeholder-gray-500 text-white rounded-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm
                  "
                />
              </div>
              <div className="py-4">
                <label htmlFor="email-address" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                  placeholder="Correo electrónico"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 border border-white
                    bg-background
                    placeholder-gray-500 text-white rounded-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm
                  "
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  name="contraseña"
                  type="password"
                  value={contraseña}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                  placeholder="Contraseña"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 border border-white
                    bg-background
                    placeholder-gray-500 text-white rounded-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm
                  "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="
                group relative flex justify-center w-full
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-background bg-primary focus:outline-none
                focus:ring-2 focus:ring-offset-2 uppercase
              "
              >
                Enviar
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mt-4">
            <p className="mr-2 text-white">
              ¿Ya tienes una cuenta?
            </p>
            <button
              onClick={props.onClick}
              className="text-primary font-medium"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegistroForm
