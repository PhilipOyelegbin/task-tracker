const { Schema, model } = require("mongoose");

const workspaceSchema = new Schema({
    creatorid:{type:Schema.Types.ObjectId,
    ref:"user",
    required:true,
    index:true
    },
    name:{type:String,
    required:true,
    index:true
    },
    shortname:{type:String
    },
    description:{type:String,
    required:true
    },
    category:{type:String},
    status:{type:String,
    require:true,
    enum:["private","public"],
    default:"private"
    }
},{timestamps:true})

const WorkspaceModel = model("workspace",workspaceSchema);

module.exports = WorkspaceModel;