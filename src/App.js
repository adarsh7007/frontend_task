import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './component/Login';
import Signup from './component/Signup';
import Homepage from './component/Homepage';

function App() {
  return (
    <div className="App">
   
      <Router>
      

        <Switch>
        <Route exact path='/Homepage' component={Homepage}/>
        <Route exact path='/Signup' component={Signup} />
              <Route exact path='/' component={Login} />
         
        </Switch>
 
    </Router>
  </div>
  );
}

export default App;
