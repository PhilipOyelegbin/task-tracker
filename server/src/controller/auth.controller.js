const {hashSync,compareSync} = require("bcryptjs");
const {sign} = require("jsonwebtoken"); 
const UserModel = require("../model/user.model");
const { APIError } = require("../utils/apiError");
const { buildUser, buildResponse } = require("../utils/response");

exports.register=async(req,res,next)=>{
    try {
        console.log(req.body);
        const {email, password}= req.body;
        if(!email || !password)
             return next(APIError.badRequest());
        //validate email

        const passwordHash = hashSync(password,12); 
        const newUser = await UserModel.create({ 
           email: email,
            password:passwordHash,
            verified:false,
        });
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
        if(!password)
        return next( APIError.badRequest("Password is required")); 
        const user = await UserModel.findOne({email: email});
        if(!user)
        return next( );
        const verify = compareSync(password,user.password);
        if(!verify)
        return next( APIError.customError("Incorrect username or password",400));

        const secrete = process.env.JWT_SECRET_TOKEN;
        const refreshSecrete = process.env.JWT_REFRESH_SECRET;
        const payload = {id:user._id,role:user.role};
        const token = sign(payload,secrete,{expiresIn:"30m"});
        const refreshToken = sign(payload,refreshSecrete,{expiresIn:"5d"});
        const data = buildUser(user.toObject());
        const responseData = buildResponse("Login successful",data,"user",{success:"Logged in",token,refreshToken});
        res.status(200).json(responseData);
    } catch (error) {
        next(error);
    }
}