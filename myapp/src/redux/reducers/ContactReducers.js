import {GETCONTACTS, GET_CONTACT, TOGGLEFALSE,TOGGLETRUE} from "../types/ContactTypes"

const initalState={
contacts:[],
contact:{},
edit:false


}

const ContactReducers=(state=initalState,action)=>{
switch (action.type){ 
    case GETCONTACTS:
        return{...state, contacts: action.payload }
   
    case GET_CONTACT:
        return{...state, contact: action.payload }
    
    case TOGGLETRUE:
        return{...state, edit:true}
        
        case TOGGLEFALSE:
            return{...state, edit:false}

         
    default:
        return state
       
    
} 

    
}
export default ContactReducers