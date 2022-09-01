const { Schema, SchemaType, model } = require("mongoose");

const MemberScheam = new Schema({
    workspace:{type:Schema.Types.ObjectId,
    ref:"workspace",
requuired:true
},
members:{type:Schema.Types.ObjectId,
ref:"user",
},
role:{type:String,
enum:["admin","user"],
default:"user",
required:true
}
},{timestamps:true})

const MemberModel = model("member",MemberScheam);
module.exports=MemberModel;