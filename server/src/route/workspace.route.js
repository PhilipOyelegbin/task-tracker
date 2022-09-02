const express = require("express"); 
const { create, 
    getWorkspace, 
    deleteWorkspace, 
    updateWorkspace,
    getWorkspaceById 
} = require("../controller/workspace.controller");
const { userRequired } = require("../middleware/auth.middleware");
const { notFound, errorHandler } = require("../middleware/error.middleware");
const workspaceRoute = express.Router();

workspaceRoute.get("/",getWorkspace);
workspaceRoute.get("/id",userRequired,getWorkspaceById);
workspaceRoute.post("/",userRequired, create);
workspaceRoute.delete("/",userRequired,deleteWorkspace);
workspaceRoute.put("/",userRequired, updateWorkspace);
// workspaceRoute.post("/logout/all",userRequired, logoutAll);

workspaceRoute.all("*", notFound);
workspaceRoute.use(errorHandler);

module.exports = workspaceRoute;