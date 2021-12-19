const validator = require('validator')

const passwordValidator = (password) => {
    if(validator.isEmpty(password) === false && validator.isStrongPassword(password,{ minSymbols: 0}) === true) 
        return true
            return false
     
}

const usernameValidator = (username) => {
    if(validator.isEmpty(username) === false && validator.isAlphanumeric(username) === true) 
        return true
            return false
}

module.exports = {
    passwordValidator,
    usernameValidator
}
