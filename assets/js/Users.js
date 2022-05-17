export class User {
    constructor (userName, userPassword, userEmail){
        this._userName = userName;
        this._userPassword = userPassword;
        this.userEmail = userEmail;
    }
    
    autanticate(password) {
        if (this._userPassword == password){
            return true;
        }
        else{
            return false;
        }
    }
}

const adm = new User("Diego Ferreira","Adm@123", "adm@alurageek.com");

export const checkADM = (email, password) => {
    if (email == adm.userEmail) {
        return adm.autanticate(password);
    } else {
        return false;
    }
}