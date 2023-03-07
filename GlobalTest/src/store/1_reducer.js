export const ingReducer = (state,action)=>{
    console.log(state);
    switch(action.type){
        case 'delete' : 
            return  state.filter((ingredients)=> ingredients.id !==action.payload.id)
        case 'add' :
            return [...state,action.payload]
        default :
        return state
    }
}