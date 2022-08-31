const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
email:{type:String,
required:true,
unique:true,
index:true
},
password:{type:String,
required:true
},
refreshToken:{type:String,
    required:true,
    default:"none"
    },
verified:{typpe: Boolean,
default:false
}
},{timestamps:true})

const UserModel = model("user",UserSchema);

module.exports=UserModel;
