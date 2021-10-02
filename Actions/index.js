export const addList=(value)=>{
    return{
        type:"ADD",
        payload:{
            id:new Date().getTime().toString(),//creating unique id
            data:value,//here data will come from parameter in todoapp.js file onclick to add
            complete:false//it check if task is complete defaut it is false
        }
    };
};
export const removeList=(idtodel)=>{
    return{
        type:"REMOVE",
        id:idtodel
    };
};
export const editList=(idtoedit,newData)=>{
    return{
        type:"EDIT",
        payload:{
            id:idtoedit,
            data:newData
        }
    };
};

export  const checkComplete=(comid)=>{
    return{
        type:"CHECK",
        payload:{
            id:comid,
            complete:true
        }
    };
};