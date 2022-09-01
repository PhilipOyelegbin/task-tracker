const {hashSync,compareSync} = require("bcryptjs");
const {sign} = require("jsonwebtoken"); 
const UserModel = require("../model/user.model");
const { APIError } = require("../utils/apiError");
const { buildUser, buildResponse } = require("../utils/response");
const { isEmailValid } = require("../utils/validateEmail");

exports.register=async(req,res,next)=>{
    try {
        console.log(req.body);
        const {email, password}= req.body;
        if(!email || !password)
             return next(APIError.badRequest());
        //validate email
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(!isEmailValid(email))
        return next(APIError.customError("Invalid email format",400));
        const passwordHash = hashSync(password,12); 
        const newUser = await UserModel.create({ 
           email: email,
            password:passwordHash,
            verified:false,
        });
        //TODO: SEND EMAIL TO user email
        
        res.status(201).json({msg:"Account created successfully"});
    } catch (error) {
        next(error);
    }
}
exports.login=async(req,res,next)=>{
    try { 
        const {password, email} =req.body;
        if(!email)
        return next( APIError.badRequest("email is required"));
        if(!isEmailValid(email))
        return next(APIError.customError("Invalid email format",400));
        if(!password)
        return next( APIError.badRequest("Password is required")); 
        const user = await UserModel.findOne({email: email});
        if(!user)
             return next(APIError.customError("user does not exist",400) );

        if(user.refreshToken !=="none")
        return next(APIError.customError("Account has an active session, logout all session first",400));
        const verify = compareSync(password,user.password);
        if(!verify)
             return next( APIError.customError("Incorrect username or password",400));

        const secrete = process.env.JWT_SECRET_TOKEN;
        const refreshSecrete = process.env.JWT_REFRESH_SECRET;
        const payload = {id:user._id,role:user.role};
        const token = sign(payload,secrete,{expiresIn:"1h"});
        const refreshToken = sign(payload,refreshSecrete,{expiresIn:"5d"});
        user.refreshToken=refreshToken;
        user.save();

        const data = buildUser(user.toObject());
        const responseData = buildResponse("Login successful",data,"user",{success:"Logged in",token});
        res.status(200).json(responseData);
    } catch (error) {
        next(error);
    }
}

exports.logout=async(req,res,next)=>{
    try {
        const user = await UserModel.findById(req.id);
        if(!user)
        return next(APIError.notFound("User does not exist"))
        if(user.refreshToken==="none")
        return next(APIError.customError("User already logged out",200));
        user.refreshToken="none";
        user.save();
        const data = buildUser(user.toObject());
        const response= buildResponse("User logged out",data,"user",{success:"Logged out successfully"});
        res.status(200).json(response);
    } catch (error) {
     next(error)   
    }
}

exports.logoutAll=async(req,res,next)=>{
    try {
        const user = await UserModel.findById(req.id);
        if(!user)
        return next(APIError.notFound("User does not exist"));
        if(user.refreshToken ==="none")
        return next(APIError.customError("There is not active session, login first",200))
        user.refreshToken="none";
        user.save();
        res.status(200).json({success:"All session logged out successfully"});

    } catch (error) {
        next(error);
    }
}