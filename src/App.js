import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Listado from './components/Listado';

import { db } from './firebase';
import { collection, addDoc, getDocs, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore";

function App() {
  const [listaPeliculas, setListaPeliculas] = useState([])
  const [update, setUpdate] = useState(false);
  const [datosPelicula, setDatosPelicula] = useState({
    id: '',
    nombre: '',
    genero: '',
    director: ''
  })

  const initUpdate = (state) => setUpdate(state);

  const onSetDatosPelicula = (values) => setDatosPelicula(values);

  const onSave = async (values) => {
    await addDoc(collection(db, 'peliculas'), values);
  }

  const onUpdate = async ({ id, nombre, genero, director }) => {
    await setDoc(doc(db, "peliculas", id), { nombre, genero, director });
  }

  const onDelete = async (id) => {
    if (window.confirm("Desea eliminar el elemento"))
      await deleteDoc(doc(db, "peliculas", id));
  }

  const getPeliculas = async () => {
    /* const snapshot = await getDocs(collection(db, 'peliculas'));
    console.log(snapshot.docs.map(doc => doc.data())); */
    onSnapshot(collection(db, 'peliculas'), (snapshot) => {
      const peliculas = [];
      snapshot.forEach(doc => peliculas.push({ ...doc.data(), id: doc.id }))
      setListaPeliculas(peliculas)
    });
  }

  useEffect(() => {
    getPeliculas();
  }, [])
  return (
    <div className="App">
      <Form
        onSave={onSave}
        onUpdate={onUpdate}
        update={update}
        datosPelicula={datosPelicula}
        onSetDatosPelicula={onSetDatosPelicula}
      />
      <Listado
        peliculas={listaPeliculas}
        initUpdate={() => initUpdate(true)}
        onSetDatosPelicula={onSetDatosPelicula}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
