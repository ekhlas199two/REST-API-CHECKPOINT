import { ListGroupItem } from "react-bootstrap"
import {useSelector} from "react-redux"
import Cards from "./Card"
import './list.css'

function List({history}){
    const contacts = useSelector(state=>state.ContactReducers.contacts  )
    console.log(contacts)
    return (
        <div className='container'>
        {contacts.map(el=> <Cards  el={el} history={history} key={el._id} />    )}
        </div>

    )
}

export default List