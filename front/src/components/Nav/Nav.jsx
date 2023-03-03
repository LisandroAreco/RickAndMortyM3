import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({onSearch}) => {



    return(    
        <nav>
            <div className={style.menu}>
                <Link to="/home" className={style.menuItem}>Home</Link>
                <Link to="/about" className={style.menuItem}>About</Link>
                <Link to="/" className={style.menuItem}>Logout</Link>
                <Link to="/favorites" className={style.menuItem}>Favorites</Link>
                
            </div>
            
            <SearchBar onSearch={onSearch} />
        </nav>

    )
}

export default Nav;