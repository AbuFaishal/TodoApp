const initialval={
    list:[]
}
//note : we always use filter() for delete and search and for editing the data we use map()
const todoReducer=(state=initialval,action)=>{
    switch(action.type){
        case "ADD":
            const {id,data,complete}=action.payload;
            return {
                ...state,list:[
                    ...state.list,{
                        id:id,
                        data:data,
                        complete:complete
                    }
                ]
            }
        case "REMOVE":
            const newList=state.list.filter((value)=>value.id!==action.id);
            return {
                ...state,list:newList
            }
        case "EDIT":
            const upList=state.list.map((value)=>{
                if(value.id===action.payload.id){
                    return {...value,data:action.payload.data}//since we have already disstructured id and data so here we calling id and data without distructuring
                }
                return value;//returning new array after updating 
            })
            return {
                ...state,list:upList
            }//returning old state with modified list in state
        case "CHECK":
            const upList2=state.list.map((value)=>{
                if(value.id===action.payload.id){
                    return {...value,complete:action.payload.complete}
                }
                return value;//returning new array after updating check
            })
            return {
                ...state,list:upList2
            }
        default:return state;
    }
}
export default todoReducer;