exports.notFound=(req,res,next)=>{
    console.log("not found called");
    res.status(404).json({error:"Rount NOT found"});
}

exports.errorHandler=(req,res,next)=>{
    console.log("handler called");
    res.status(5000).json({error: "Unknown error"});
}

