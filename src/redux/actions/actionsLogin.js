// Redux
import { typesLogin } from "../types/types"

// Firebase
import { google, facebook } from "../../firebase/firebaseConfig"
import {
  getAuth,
  signOut,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
} from "firebase/auth"

//---------- Logout ----------//
export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth()
    const userDelete = auth.currentUser

    deleteUser(userDelete)
    .then(() => {
      console.log("Usuario eliminado")
    }).catch((error) => {
      console.log(error)
    })

    signOut(auth)
      .then((user) => {
        console.log('Adios')
        dispatch(logout())

      })
      .catch(error => {
        console.warn(error)
      })
  }
}

export const logout = () => {
  return {
    type: typesLogin.logout
  }
}

//---------- Obtener Perfil Usuario con Firebase ----------//
export const getProfile = () => {
  return (dispatch) => {
    const auth = getAuth()
    const user = auth.currentUser
    if (user !== null) {
      const displayName = user.displayName
      const email = user.email
      const uid = user.uid

      console.log(displayName, email, uid)
    }
  }
}

//---------- Login Asincornico con Firebase ----------//
export const loginAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSync(user.email, user.password))
        console.log('Usuario autorizado')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }
}

export const loginSync = (user, pass) => {
  return {
    type: typesLogin.login,
    payload: { user, pass }
  }
}

//---------- Validación con Google de Firebase ----------//
export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user, 'Usuario autorizado')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }
}

//---------- Validación con Facebook de Firebase ----------//
export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        console.log(user, 'Usuario autorizado')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }
}

//---------- Para registrar en Firebase ----------//
export const registroAsync = (nombre, email, contraseña) => {
  return (dispatch) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, contraseña)
      .then(async ({ user }) => {
        console.log(user)
        await updateProfile(auth.currentUser, { displayName: nombre })
        dispatch(registroSync(nombre, email, contraseña))
        console.log('Usuario Registrado de manera exitosa')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }
}

export const registroSync = (nombre, email, contraseña) => {
  return {
    type: typesLogin.registro,
    payload: {
      nombre, email, contraseña
    }
  }
}
