exports.buildUser=(userObject)=>{
    const {__v,password, ...data}=userObject;
    return data;
}

exports.buildResponse=(msg,data, field="data",others={})=>{
    const response ={
        msg,
        [field]:data,
        ...others
    }
    return response;
}

exports.buildWorkspace=(workspaceObj)=>{
    const {__v,creatorid,...data}= workspaceObj;
    return data;
}