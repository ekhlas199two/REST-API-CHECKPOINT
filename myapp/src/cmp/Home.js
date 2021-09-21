
import '../App.css';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux" 
import { getContact, togglefalse } from '../redux/actions/ContactActions';

function Home() {
  const dispatch= useDispatch()
  return (
    <div className="home" >
    <Link  to="/contacts" className="links" onClick={()=>dispatch(getContact())} > Contact list  </Link>
    <Link to="/AddEdit" onClick={()=>togglefalse()} className="links">Add contact </Link>
   
</div>
  );
}

export default Home;