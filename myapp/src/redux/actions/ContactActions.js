import axios from 'axios'
import { GETCONTACTS, GET_CONTACT,TOGGLEFALSE,TOGGLETRUE } from "../types/ContactTypes";

export const getContact=()=> async(dispatch)=>{
    try {
        const res= await axios.get('/api/contacts')
        dispatch({type: GETCONTACTS, payload:res.data.contacts})
        console.log(res.data.contacts)
    } catch (error) {
        console.log(error)
    }
}
export const addContact=(newcontact)=>async(dispatch)=>{
    try {
        const res= await axios.post('./api/contacts', newcontact)
        dispatch(getContact())
    } catch (error) {
        console.log(error)
    }
}
export const deleteConatct=(id)=> async(dispatch)=>{
    try {
        await axios.delete(`/api/contacts/${id}`)
        dispatch(getContact())
    } catch (error) {
        console.log(error)
    }
}

// export const getOneContact=(id)=> async(dispatch)=>{
//     try {
//         const res= await axios.get(`/api/contacts/${id}`)
      
//         dispatch({type:GET_CONTACT, payload:res.data.contact})
//     } catch (error) {
//         console.log(error)
//     }
// }

export  const editContact=(id,newContact)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/${id}`,newContact)
        dispatch(getContact())
    } catch (error) {
        console.log(error)
    }
}




export const getOneContact=(id)=>async(dispatch)=>{
    try {
      const res=  await axios.get(`/api/contacts/${id}`)
      dispatch({type:GET_CONTACT,payload:res.data.user})
    } catch (error) {
        console.log(error)
    }
}





export const toggletrue=()=>{
    return({type:TOGGLETRUE})
}

export const togglefalse=()=>{
    return({type:TOGGLEFALSE})
}
