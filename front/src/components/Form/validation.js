const validation = (userData) => {
    let errors = {};
    if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(userData.username)) {
        errors.username = "El email es inválido"
    }
    if(!userData.username) {
        errors.username = "Este campo no puede estar vacio"
    }
    if(userData.username.length > 35) {
        errors.username ="El email no puede superar los 35 caracteres"
    }
    if(!userData.password.match(/\d/)){
        errors.password = "El password debe contener un número"
    }
    if(userData.password.length < 7 || userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }
    return errors
}

export default validation