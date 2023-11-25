const Ej_Props1 = (props) =>{

        return(
            <h3>Hola {props.nombre} </h3>
        )
}


const Ej_Props2= (props) =>{
    const {elementos} =props;
    return(
        <ul>
            {elementos.map (elemento=> <li key={elemento}> {elemento} </li>)}
        </ul>
        )
}

const Ej_Props3=({titulo, subtitulo, cuerpo}) =>{

    return(
        <div>
            <h4>{titulo} </h4>
            <h5>{subtitulo} </h5>
            <p>{cuerpo} </p>
        </div>


    )



}


export {
    Ej_Props1, Ej_Props2, Ej_Props3
}