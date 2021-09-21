import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useHistory} from "react-router-dom"
import "./AddEdit.css"
import {addContact, editContact} from "../redux/actions/ContactActions"



function AddEdit() {
    const [name,setName]= useState("")
    const [email, setEmail]= useState("")
    const [age,setAge]= useState(0);
    const dispatch = useDispatch() 
    const history= useHistory()
    const Contact= useSelector(state=>state.ContactReducers.contact)
    const edit= useSelector(state=>state.ContactReducers.edit)
    console.log(Contact)
    useEffect(()=>{
if (edit) {setName(Contact.name)}
else {setName(''); setEmail(''); setAge(0) }
    }, [])


    return(
        <div>
            <form class="form">
  <h2>{edit? 'Edit contact': 'Add contact'}</h2>
  <p type="Name:"><input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Write your name here.."></input></p>
  <p type="Email:"><input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Write your email.."></input></p>
  <p type="Age:"><input value={age} onChange={(e)=>setAge(e.target.value)}   placeholder="Insert your age.."></input></p>
 
 {edit ?  <button onClick={()=>{dispatch(editContact(Contact._id, {name, email, age}));history.push('/contacts')} } >Edit</button>:
  <button onClick={()=>{dispatch(addContact({name,email,age}));history.push('/contacts')} } >Save</button> }
 
  
 
</form> 


        </div>
    )
}

export default AddEdit