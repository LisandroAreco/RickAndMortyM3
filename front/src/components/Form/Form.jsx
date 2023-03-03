import { useState } from "react"
import validation from "./validation"
import style from "./Form.module.css"

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [errors,setErrors] = useState({
        username: "",
        password: ""
    })


    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })


        )
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
   
    return(

        <form className={style.container} onSubmit={handleSubmit}>
            <label className={style.label_box} htmlFor="username">Username:</label>
            <input className={style.input_box}  type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
            <label className={style.label_box} htmlFor="password">Password:</label>
            <input className={style.input_box}  type="password" name="password" value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            <button className={style.button_form}>Login</button>
        </form>
    )
}
export default Form;