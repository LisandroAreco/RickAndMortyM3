import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css"

const Detail =() => {
    const {id} = useParams()
    const[character,setCharacter] = useState({})


useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
        .then((response) => response.json())
        .then((char) => {
        if (char.name) {
            setCharacter(char);
        } else {
            window.alert("No hay personajes con ese ID");
        }
        })
        .catch((err) => {
        window.alert("No hay personajes con ese ID");
        });
    return setCharacter({});
}, [id]);
    


    return(
        <div className={style.container}>
            <button className={style.button_back}>
                <Link to="/home">BACK</Link>
            </button>
            <h2 className={style.char_name}>{character.name}</h2>
            <h3 className={style.description}>STATUS: {character?.status}</h3>
            <h3 className={style.description}>SPECIE: {character.species}</h3>
            <h3 className={style.description}>GENRE: {character.gender}</h3>
            <h3 className={style.description}>ORIGIN: {character?.location?.name}</h3>
            <img src={character.image} alt={character.name} />
        </div>
    )
}


export default Detail;