import alumnos from '../data/alumnos.json'


const Json= (props) =>{

    return(
        <>
            <h2>Carga de datos rápida</h2>
            <ul>
                {alumnos.map(alumno=> (
                    <li>{alumno.nombre} {alumno.Apellido}, Edad: {alumno.edad} </li>
                ))}

            </ul>
        
        </>
    )


}


export default Json;