const app= require("./src/app");
const dbConnect = require("./src/config/db.config");
const { notFound, errorHandler } = require("./src/middleware/error.middleware");
const authRoute = require("./src/route/auth.route");

app.use("/api/auth", authRoute);

app.use("*",notFound);
app.use(errorHandler);


const start=async()=>{
    try {
        await dbConnect();
        app.listen(process.env.SERVER_PORT,()=>{
            console.log(`Server is running on port: ${process.env.SERVER_PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();