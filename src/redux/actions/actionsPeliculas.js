import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import { DB } from '../../firebase/firebaseConfig'
import { typesPelicula } from "../types/typesPelicula"

// Eliminar Película
export const deletePeliculaSync = (id) => {
  return {
    type: typesPelicula.delete,
    payload: id
  }
}

export const deletePeliculaAsync = (id) => {
  return async (dispatch) => {
    const colectionList = collection(DB, 'ApiPeliculas')
    const q = query(colectionList, where('id', '==', id))
    const datosQ = await getDocs(q)

    datosQ.forEach(e => {
      deleteDoc(doc(DB, 'ApiPeliculas', e.id))
    })

    dispatch(deletePeliculaSync(id))
  }
}


// Editar Película
export const editPeliculaSync = (pelicula) => {
  return {
    type: typesPelicula.edit,
    payload: pelicula
  }
}

export const editPeliculaAsync = (id, pelicula) => {
  return async (dispatch) => {
    const colectionList = collection(DB, 'ApiPeliculas')
    const q = query(colectionList, where('id', '=', id))
    const datosQ = await getDocs(q)
    let id

    datosQ.forEach(e => {
      id = e.id
    })

    const docRef = doc(DB, 'ApiPeliculas', id)
    await updateDoc(docRef, pelicula)
    .then(response => {
      dispatch(editPeliculaSync(pelicula))
    })
    .catch(error => {
      console.log(error)
    })

    dispatch(listPeliculasAsync(pelicula))
  }
}

// Detalle Película
export const detailPeliculaSync = (pelicula) => {
  return {
    type: typesPelicula.detail,
    payload: pelicula
  }
}

export const detailPeliculaAsync = (id) => {
  return async (dispatch) => {
    const colectionList = collection(DB, 'ApiPeliculas')
    const q = query(colectionList, where('id', '==', id))
    const datosQ = await getDocs(q)

    const peliculas = datosQ.docs.forEach(e => {
      e.data()
    })

    dispatch(listPeliculasAsync(peliculas))
  }
}


// Listar Peliculas
export const listPeliculasSync = (pelicula) => {
  return {
    type: typesPelicula.list,
    payload: pelicula
  }
}

export const listPeliculasAsync = () => {
  return async (dispatch) => {
    const colectionList = await getDocs(collection(DB, 'ApiPeliculas'))
    const peliculas = []
    console.log(colectionList)
    colectionList.forEach(list => {
      peliculas.push({
        ...list.data()
      })
    })
    dispatch(listPeliculasSync(peliculas))
  }
}

// Agregar Pelicula
  export const addPeliculaSync = (pelicula) => {
    return {
      type: typesPelicula.add,
      payload: pelicula
    }
  }

  //addDoc()recibe dos parametros, el donde lo voy a guardar y el que voy a guardar
  // Collection() recibe dos parametros(nombre de la conexión de firebase y el nombre de la colección)
  export const addPeliculaAsync = (pelicula) => {
    return (dispatch) => {
      addDoc(collection(DB, 'ApiPeliculas'), pelicula)
      .then(resp => {
        pelicula = {...pelicula, created_at: serverTimestamp()}
        dispatch(addPeliculaSync(pelicula))
        dispatch(listPeliculasSync())
      })
      .catch(err => {
        console.log(err)
      })
    }
  }