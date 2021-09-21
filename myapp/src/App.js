import './App.css'
import Home from "./cmp/Home"
import AddEdit from "./cmp/AddEdit"
import List from "./cmp/List"
import {Route} from "react-router-dom"
import NavBar from './cmp/NavBar'


function App() {
  return (
    <div className="app"  >
      <NavBar/>
  <Route exact path="/"   component={Home}  />
  <Route exact path='(/addEdit|/editContact)' component={AddEdit}    />
  <Route exact path="/contacts" component={List}    />
   
  
   

    </div>
  );
}

export default App;
