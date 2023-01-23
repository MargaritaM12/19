class Validator {
    constructor(str) {
this.str = str
}
    isEmail() {
        if ((this.str.indexOf('@') !== -1) && (this.str.indexOf('.') !== -1)){
            return true
        }
        return false
    }
    static isEmailstat() {
        if ((this.str.indexOf('@') !== -1) && (this.str.indexOf('.') !== -1)){
            return true
        }
        return false
    }
    isDomain() {
        if ((this.str.indexOf('.com') !== -1) || (this.str.indexOf('.net') !== -1)){
            return true
        }
        return false
    }
    static isDomainstat() {
        if ((this.str.indexOf('.com') !== -1) || (this.str.indexOf('.net') !== -1)){
            return true
        }
        return false
    }
    isDate() {
        if (this.str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/)){
            return true
        }
        return false
    }
    static isDatestat() {
        if (this.str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/)){
            return true
        }
        return false
    }
    isPhone() {
        if (this.str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/)){
            return true
        }
        return false
    }
    static isPhonestat() {
        if (this.str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/)){
            return true
        }
        return false
    }
}
const validator = new Validator();

validator.isEmail();
validator.isDomain();
validator.isDate();
validator.isPhone();

