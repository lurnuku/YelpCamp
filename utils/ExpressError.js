class ExpressError extends Error {
    constructor(message, statusCode) {
        super(); //The super keyword is used to call the constructor of its parent class 
                 //to access the parent's properties and methods.
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;