// Base
import React from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { loginAsync, loginGoogle,  loginFacebook} from '../redux/actions/actionsLogin'

// Hook
import useForm from '../hook/useForm'

// Hero Icons
import { LockClosedIcon } from '@heroicons/react/solid'

const LoginForm = (props) => {
  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm({
    user: '',
    pass: ''
  })

  const { user, pass } = formValue

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValue)
    dispatch(loginAsync(user, pass))
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
              Iniciar sesión
            </h2>

            <p className="mt-2 text-start text-md text-white">
              Inicie sesión con su cuenta para continuar
            </p>
          </div>

          <div>
            <p className='mb-2 font-medium text-white'>
              Inicia sesión con
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(loginFacebook())}
                className="
                  flex items-center justify-center
                  w-1/2 h-11
                  text-3xl text-white
                  border rounded
                  transition ease-in-out delay-150
                  hover:shadow-slate-200 hover:shadow-md
                "
              >
                <i className="ri-facebook-circle-fill"></i>
              </button>

              <button
                onClick={() => dispatch(loginGoogle())}
                className="
                  flex items-center justify-center
                  w-1/2 h-11
                  text-3xl text-white
                  border rounded
                  transition ease-in-out delay-150
                  hover:shadow-slate-200 hover:shadow-md
                "
              >
                <i className="ri-google-fill"></i>
              </button>
            </div>
          </div>

          <hr className="text-white"/>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  name="user"
                  type="email"
                  value ={user}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                  className="
                    appearance-none rounded-none relative block
                    w-full px-3 py-3 border border-white
                    bg-background
                    placeholder-gray-500 text-white rounded-t-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm
                  "
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  name="pass"
                  type="password"
                  value ={pass}
                  onChange={handleInputChange}
                  autoComplete='off'
                  required
                  className="
                    appearance-none rounded-none relative block
                    w-full px-3 py-3 border border-white
                    bg-background
                    placeholder-gray-500 text-white rounded-b-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm
                  "
                  placeholder="Contraseña"
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
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-background" aria-hidden="true" />
                </span>
                Entrar
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mt-4">
            <p className="mr-2 text-white">
              ¿No tienes una cuenta?
            </p>
            <button
              onClick={props.onClick}
              className="text-primary font-medium"
            >
              Crear Cuenta
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginForm
