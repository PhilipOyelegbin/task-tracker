const { verify, decode } = require("jsonwebtoken");
const { APIError } = require("../utils/apiError");

exports.userRequired=async(req,res,next)=>{
    try {
        const {authorization} = req.headers;
        if(!authorization)
        return next(APIError.unauthenticated());
        const token= authorization.split(" ")[1];
        const isVerified = verify(token,process.env.JWT_SECRET_TOKEN);
        if(!isVerified)
        return next(APIError.customError("Token expired"));
        req.id=isVerified.id;
        next()

    } catch (error) {
        next(error);
    }
}

exports.userRequiredLogout=async(req,res,next)=>{
    try {
        const {authorization} = req.headers; 
        if(!authorization)
        return next(APIError.unauthenticated());
        const token= authorization.split(" ")[1];
        console.log(token);
        const user = decode(token,process.env.JWT_SECRET_TOKEN);  
        req.id=user.id;
        next() 
    } catch (error) { 
        next(error);
    }
}