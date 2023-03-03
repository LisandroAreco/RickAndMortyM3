import { useState } from "react";
import style from "./SearchBar.module.css"

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("")

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }
   return (
      <div className={style.searchbar}>
         <input className={style.searchbar_input} type='search' value={character} onChange= {handleChange} placeholder="Look for characters!"/>
         <button className={style.searchbar_button} onClick={() => onSearch(character)} >Search</button> 
      </div>
   );
}
export default SearchBar;