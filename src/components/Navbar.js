import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, PlusIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import CrearPeliculas from './CrearPeliculas'
import { getProfile, logoutAsync } from '../redux/actions/actionsLogin'
import { useDispatch, useSelector } from 'react-redux'

const navigation = [
  { name: 'Todas', to: '/', current: true },
  { name: 'Más valoradas', to: '/more-value', current: false },
  { name: 'Menos valoradas', to: '/less-value', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const dispatch = useDispatch()
  let [modal, setModal] = useState(false)

  const handleCrear = () => {
    setModal(true)
  }

  const { displayName } = useSelector(store => store.login)

  return (
    <>
      <Disclosure as="nav" className="bg-background max-w-[1470px] mx-auto sticky">
        {({ open }) => (
          <>
            <div className="max-w-screen-2xl mx-auto px-2 py-4 sm:px-6 lg:px-8">
              <div className="relative flex items-start lg:items-center justify-between h-36 lg:h-28">
                <div className="absolute inset-y-0 left-0 flex items-start lg:items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    className="
                      inline-flex items-start lg:items-center justify-center
                      p-2 rounded-md text-primary
                    hover:text-white
                    "
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div
                  className="
                    flex-1 flex
                    items-start justify-center lg:items-center
                    sm:items-center sm:justify-start
                  "
                >
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block h-16 w-auto"
                      src="https://res.cloudinary.com/dz8on44po/image/upload/v1652149984/block-master/tolphiyeerfgawlt73du.png"
                      alt="Workflow"
                    />
                  </div>

                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                            ? 'text-primary underline decoration-solid'
                            : 'text-white hover:text-primary',
                            'px-3 py-2 text-base font-bold no-underline'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute lg:relative bottom-0 grid grid-cols-2 gap-2 md:flex md:flex-row md:items-center md:justify-start w-auto md:grid-cols-none">
                  <form className="w-full md:w-3/4 lg:w-64">
                    <input className="w-full h-9"/>
                  </form>

                  <button
                    onClick={handleCrear}
                    className="
                      group relative flex justify-end w-full md:w-1/4 lg:w-44 py-2 px-4 lg:mx-3
                      border border-transparent text-sm font-medium uppercase
                      rounded-md text-background bg-primary focus:outline-none
                      focus:ring-1 focus:ring-offset-1 ring-offset-primary
                      float-right
                    "
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <PlusIcon className="h-5 w-5 text-background" aria-hidden="true" />
                    </span>
                    <span className="relative hidden md:block mr-1">
                      Nueva
                    </span>
                      Película
                  </button>
                </div>


                <div
                  className="
                    z-50 absolute inset-y-0 right-0
                    flex items-start md:items-center
                    px-2 sm:static
                    sm:inset-auto sm:ml-6 sm:pr-0
                  "
                >
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative z-50">
                    <div>
                      <Menu.Button
                        onClick={() => dispatch(getProfile())}
                        className="bg-background flex text-sm rounded-full">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        className="
                          z-50 origin-top-right absolute
                          top-5 right-10 mt-2 w-48 rounded-md shadow-lg py-1
                          bg-white ring-1 ring-black ring-opacity-5
                          focus:outline-none
                        "
                      >
                        {/* <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={
                                classNames(active
                                  ? 'bg-gray-100'
                                  : '', 'block px-4 py-2 text-sm text-gray-700'
                                )
                              }
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={
                                classNames(active
                                  ? 'bg-gray-100'
                                  : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )
                              }
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => dispatch(logoutAsync())}
                              className={
                                classNames(active
                                  ? 'bg-gray-100'
                                  : '',
                                  'block w-full px-4 py-2 text-sm text-gray-700 text-left'
                                )
                              }
                            >
                              Cerrar Sesión
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    to={item.to}
                    className={classNames(
                      item.current
                      ? 'text-primary underline decoration-solid'
                      : 'text-white hover:text-primary',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {
        modal === true
        ? (<CrearPeliculas setModal={setModal}/>)
        : ''
      }
    </>
  )
}

export default Navbar
