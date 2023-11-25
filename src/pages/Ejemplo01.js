import { Ej_Props1 } from "../componentes/Props";
import { Ej_Props2 } from "../componentes/Props";
import { Ej_Props3 } from "../componentes/Props";

const nombre ='Fabian'
const frutas= ["manzanas","bananas", "paltas", "sandias"]
const verduras= ["papas"," zanahoria","cebolla"]

const Ejemplo01= (props) =>{

    return(
        <div>
            <h2>Ejemplos de Props</h2>

            <Ej_Props1 nombre="Fabian"/>
            <Ej_Props1 nombre={nombre}/>
            <Ej_Props2 elementos={frutas} />
            <Ej_Props2 elementos={verduras} />
            <Ej_Props3 titulo='Messi' subtitulo='Cositas del fulbo pa' cuerpo={'No me funciona el Lorem, la puta madre'}/>
        </div>

    )

}



export default Ejemplo01;