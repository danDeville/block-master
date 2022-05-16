import { typesLogin } from "../types/types"

export const reducerLogin = (state = {}, action) => {
  switch (action.type) {
    case typesLogin.login:
      return {
        user: action.payload.user,
        pass: action.payload.pass
      }
    case typesLogin.registro:
      return {
        email: action.payload.email,
        contraseña: action.payload.contraseña,
        nombre: action.payload.nombre,
      }
    case typesLogin.logout:
      return {
      }
    default:
      return state
  }
}