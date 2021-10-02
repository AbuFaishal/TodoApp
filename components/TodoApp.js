import React, { useState } from 'react'
import './TodoApp.css'

let deftickicon = {
    fontSize: "20px",
    marginRight: "20px",
    background: "gray",
    borderRadius: "50%",
    padding: "3px",
    color: "white",
    cursor:"pointer"
}
let uptickicon = {
    fontSize: "20px",
    marginRight: "20px",
    background: "purple",
    borderRadius: "50%",
    padding: "3px",
    color: "white",
    cursor:"pointer"
}
const editDel = {
    fontSize: "24px",
    float: "right",
    margin: "0px 10px",
    cursor: "pointer",
    color: "purple"
}
function TodoApp(props) {
    const [input, upinput] = useState("");
    const[edittoggle,upedittoggle]=useState(false);
    const[storeid,upstoreid]=useState(0);
    const[current,upcurrent]=useState(deftickicon);
    const edit=(data,id)=>{
        upinput(data);
        upedittoggle(true);
        upstoreid(id);
    }
    const add=()=>{
        if(edittoggle==true && storeid!=0){
            if(input!=="" && input!==" "){
                props.dispatch(props.editList(storeid,input));
                upedittoggle(false);
                upstoreid(0);
                upinput("");
            }
            else{
                alert("please add data");
            }
        }
        else{
            if(input!=="" && input!==" "){
                props.dispatch(props.addList(input));
                upinput("");
            }
            else{
                alert("please add data");
            }
        }
    }
    
    return (
        <>
            <div className="contain text-dark">
                <h3>Todo App</h3>
                <div className="content">
                    <div className="inputpart">
                        <input type="text" value={input} onChange={(event) => upinput(event.target.value)} placeholder="Enter todo.." />
                        <button onClick={() => add()}>{edittoggle?"UPDATE":"ADD"}</button>
                    </div>
                    <div className="listpart">
                        {
                            props.data.map((value) => {
                                return (
                                    <li key={value.id}>
                                    <i className="fa fa-check" style={!value.complete?deftickicon:uptickicon} onClick={()=>props.dispatch(props.checkComplete(value.id))}></i>
                                     {value.data}
                                     <i className="fa fa-edit" style={editDel} onClick={()=>edit(value.data,value.id)}></i> 
                                     
                                     <i style={editDel} onClick={()=>props.dispatch(props.removeList(value.id))}>
                                     <img src="https://img-premium.flaticon.com/png/512/4442/premium/4442016.png?token=exp=1633153690~hmac=7ba5a812a721f780b848ba2ed60d42f7" alt="Delete" style={{width:"30px",color:"red",cursor:"pointer",marginTop:"-10px"}}/>
                                     </i>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoApp
