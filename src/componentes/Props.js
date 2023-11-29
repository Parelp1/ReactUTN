const Ej_Props1 = (props) => {

    return (
        <h3>Hola {props.nombre} </h3>
    )
}


const Ej_Props2 = (props) => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}> {elemento} </li>)}
        </ul>
    )
}

const Ej_Props3 = ({ titulo, subtitulo, cuerpo }) => {

    return (
        <div>
            <h4>{titulo} </h4>
            <h5>{subtitulo} </h5>
            <p>{cuerpo} </p>
        </div>
    )
}

const Ej_Props4 = (props) => {
    //cuando se produzca el evento on Change en el input ejecuto la funcion anonima que llama a la funcion 
    return(
        <label> ver en consola: <input type="text" onChange={(e) => props.cambiarValor(e.target.value)} /> </label>
    )
}


const Ej_Props5 = (props) => {

    const handleClick = e =>{
        if(props.eventoClick){
            props.eventoClick('Me cliqueaste')
        }
    }
    return(
        <p><button onClick={handleClick}>CLiqueame</button> </p>
    )

}

export {
    Ej_Props1, 
    Ej_Props2, 
    Ej_Props3,
    Ej_Props4,
    Ej_Props5
}