export default class ApiError extends Error {
    constructor (status, message, errors){
        super(message)
        this.errors = errors
        this.status = status
        this.success = false    
        Error.captureStackTrace(this. this.constructor)
    }

    static badRequest(message="Invalid formate", errors=[]){
        return this.ApiError(400,message, errors)
    }

    static unauthorized(message="Authentication required", errors=[]){
        return this.ApiError(401,message, errors)
    }

    static forbidden(message="Not have permissions to access resources", errors=[]){
        return this.ApiError(403,message, errors)
    }

    static notFound(message="Resources not found", errors=[]){
        return this.ApiError(404,message, errors)
    }

    static toManyRequest(message="Rate limit exceeded", errors=[]){
        return this.ApiError(404,message, errors)
    }

}