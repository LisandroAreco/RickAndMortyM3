import { useSelector, useDispatch } from "react-redux"
import style from "./Favorites.module.css"
import { Link } from "react-router-dom" 
import { orderCards, filterCards } from "../../redux/action"

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch()
    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handlerfilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select onChange={handlerOrder}>
                    <option value="Order" disabled="disabled">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerfilter}>
                    <option value="Filter" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
            {
                myFavorites.map((character) => {
                    return(
                        <div>
                            <img  src={character.image} alt={character.name} />
                            <Link to={`/detail/${character.id}`}> <h2>{character.name}</h2> </Link>
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Favorites