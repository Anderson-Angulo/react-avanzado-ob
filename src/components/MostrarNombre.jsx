import {useState} from 'react'
const MostrarNombre = ({names}) => {
  const [name, setName] = useState(names[0]);
  const getName=()=>{
    const index=Math.floor(Math.random()*(names.length))
    setName(names[index])
  }
  const clearName=()=>{
    setName("")
  }
  console.log("Componente Rederizado")
  return (
    <div>
      <h1>El nombre es: {name}</h1>
      <button onClick={getName}>
        Cambiar Nombre
      </button>
      <button onClick={clearName}>
        Borrar Nombre
      </button>
    </div>
  )
}
export default MostrarNombre