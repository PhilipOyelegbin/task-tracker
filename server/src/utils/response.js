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