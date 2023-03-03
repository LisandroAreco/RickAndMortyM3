import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/action";


function Card({name, species, onClose, gender, image, id}) {
   const dispatch = useDispatch()
   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav,setIsFav] = useState(false)
   
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         dispatch(deleteFavorite(id))
      }
      else {
         setIsFav(true)
         dispatch(addFavorite({name, species, onClose, gender, image, id}))
      } 
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.card}>
         <button className={style.button_close} onClick={onClose}><span>X</span></button>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <img  src={image} alt={name} />
         <Link to={`/detail/${id}`}> <h2>{name}</h2> </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}



export default Card;
