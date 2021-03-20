import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

import StatsPage from './components/StatsPage'
import Reporting from './components/Reporting'
import Marketing from './components/Marketing'
import Sales from './components/Sales'
import UserManagementSystem from './components/UserManagementSystem'
import Appcms from './components/Appcms'
import Liveclasses from './components/Liveclasses'
import Livequiz from './components/Livequiz'
import mentormodule from './components/mentormodule'
import './styles/Styles.css'


function App() {
  return (
    <div className="App">
     
     <Router>
      <div class="sidebar" >
    <img src="../assets/index.JPG"></img>
<Nav className="flex-column">     

 
  <Link to='/Statspage' >Stats Page</Link>
  <Link to='/Reporting' >Reporting</Link>
  <Link to='/MarketingPage' >MarketingPage</Link>
  <Link to='/Sales' >Sales</Link>
  <Link to='/AppCMS' >App CMS</Link>
  <Link to='/UserManagementSystem' >User Management System</Link>
  <Link to='/Liveclasses' >Live Classes</Link>
  <Link to='/Mentormodule' >Mentor Module</Link>
  
  <Link to='/livequiz' >Livequiz</Link>
  </Nav>
  
  
  </div>
      <Switch>
          
          <Route exact path='/Statspage' component={StatsPage}></Route>
          <Route exact path='/Reporting' component={Reporting}></Route>
          <Route exact path='/Marketing' component={Marketing}></Route>
          <Route exact path='/Sales' component={Sales}></Route>
          <Route exact path='/AppCMS' component={Appcms}></Route>
          <Route exact path='/UserManagementSystem' component={UserManagementSystem}></Route>
          <Route exact path='/Liveclasses' component={Liveclasses}></Route>
          <Route exact path='/MentorModule' component={mentormodule}></Route>
          <Route exact path='/Livequiz' component={Livequiz}></Route>
          

     </Switch>
   
      
      </Router>
    </div>
  );
}

export default App;
