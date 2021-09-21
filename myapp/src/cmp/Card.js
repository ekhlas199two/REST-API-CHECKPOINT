
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux"
import { deleteConatct, getOneContact , toggletrue} from '../redux/actions/ContactActions';
import {Link} from "react-router-dom"


function Cards({el,history}) {
  const dispatch = useDispatch()
  
    return(
    <div>
       

       <div classNAme='card'>
        <Card style={{ width: '18rem' }}>
  <Card.Img  src="./profilePicture.jpg" />
  <Card.Body>
    <Card.Title style={{color:'blue'}}>{el.name}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Username: {el.name}</ListGroupItem>
    <ListGroupItem>EMail: {el.email}</ListGroupItem>
    <ListGroupItem>Age: {el.age} </ListGroupItem>
     
    
  </ListGroup>
 <button   onClick={()=>{dispatch(getOneContact(el._id)); dispatch(toggletrue());history.push('/editContact')}}  > EDIT</button> 
      <button  onClick={()=>dispatch(deleteConatct(el._id))}  > DELETE</button>
    

</Card>

    </div>


    </div>

    )
  
}
export default Cards