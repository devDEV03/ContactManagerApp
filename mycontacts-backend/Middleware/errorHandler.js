const { constants } = require("../constants");

// Make sure the parameters are in this order only otherwise it will give us an error
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title : "Validation Error",message : err.message, stackTrace : err.stack});            
            break;
        
        case constants.FORBIDDEN:
            res.json({title : "Forbidden",message : err.message, stackTrace : err.stack});            
            break;

        case constants.NOT_FOUND:
            res.json({title : "Not Found" ,message : err.message, stackTrace : err.stack});            
            break;

        case constants.UNAUTHORIZED:
            res.json({title : "Unauthorized",message : err.message, stackTrace : err.stack});            
            break;

        case constants.SERVER_ERROR:
            res.json({title : "Server Error",message : err.message, stackTrace : err.stack});            
            break;
        default:
            console.log("No Errors Found,All good!!");
            break;
    }
}

module.exports = errorHandler;