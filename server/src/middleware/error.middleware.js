exports.notFound=(req,res,next)=>{
    const err = new Error("Route NOT found")
     err.status= 404 ;
     next(err);
}

exports.errorHandler=(err,req,res,next)=>{
    res.status(err.status||500).json({msg: err.message||"Unknown error"});
}

