import React, { useState } from 'react'
const ListasHooks = () => {
    const heroesList = ["Punisher","spiderman","Ironman","Batman","superman"]
    const alumnosList = [
        {id:"201901",nombre:"Fernando",carrera:"Sistemas"},
        {id:"201902",nombre:"Paulina",carrera:"Sistemas"},
        {id:"201903",nombre:"Anyeli",carrera:"Arquitectura"}
    ]
    const [alumnos,setAlumnos]=useState(alumnosList)
    const [heroes,setHeroes]= useState(heroesList)
    const agregarHeroes=()=>{
        const nuevoHeroe = prompt("Ingrese un nuevo heroe")
        setHeroes([...heroes,nuevoHeroe])
    }
    const agregarAlumno=()=>{
        const id = prompt("Ingrese un id")
        const nombre = prompt("Ingrese nombre")
        const carrera = prompt("Ingrese carrera")
        
        setAlumnos([...alumnos,{id:id,nombre:nombre,carrera:carrera}])
    }
    return (
    <>ListasHooks
        <h1>Lista de hooks</h1>
        <h2>Lista de Heroes</h2>
        <div>{
            heroes.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
        }</div>
        <button onClick={agregarHeroes}>Agregar Superheroe</button>
        <table>
            <tr><th>ID</th><th>Nombre</th><th>Carrera</th></tr>
            {alumnos.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.carrera}</td>
                </tr>
            ))}
        </table><button onClick={agregarAlumno}>Agregar Alumno</button>
        
    </>
  )
}
export default ListasHooks