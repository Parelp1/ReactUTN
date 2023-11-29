import { Link } from "react-router-dom";

const Nav= (props) =>{
    return (
        <nav>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/ejemplo01">Ejemplo1</Link></li>
                <li> <Link to="/ejemplo02">Ejemplo2</Link></li>
                <li> <Link to="/mapas">Mapas</Link></li>
                <li> <Link to="/json">Json</Link></li>
                <li> <Link to="/api">API</Link></li>

            </ul>        
        </nav>
    );
}
export default Nav;