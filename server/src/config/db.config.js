const {connect} =require("mongoose");

const dbConnect =async()=>{
try { 
    await connect(process.env.DB_URI);
    console.log("Database connected successfully");
} catch (error) {
    console.log(`Database connection err: ${error }`);
    process.exit(-1);
}
}

module.exports=dbConnect;
