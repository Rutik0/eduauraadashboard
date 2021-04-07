import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Glyphicon,
  Container,
} from "react-bootstrap";

import StatsPage from "./components/StatsPage";
import Reporting from "./components/Reporting";
import Marketing from "./components/Marketing";
import Sales from "./components/Sales";
import UserManagementSystem from "./components/UserManagementSystem";
import Appcms from "./components/Appcms";
import Liveclasses from "./components/Liveclasses";
import Livequiz from "./components/Livequiz";
import mentormodule from "./components/mentormodule";
import "./styles/Styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Container style={{ margin: 0 }}>
          <Row>
            <Col lg={3}>
              <div className="sidebar">
                <div className="img-title">
                  <img
                    className="imgtitle"
                    src="https://eduauraapublic.s3.ap-south-1.amazonaws.com/webassets/images/logo/eduauraa-logo.png"
                    alt="Eduauraa Logo"
                  ></img>
                </div>
                <div className="sidebar1">
                  <Nav className="flex-column tags">
                    <Link to="/" className="statspageanchor">
                      <i class="fa fa-bar-chart" aria-hidden="true"></i>
                      Stats Page
                    </Link>
                    <Link to="/Reporting">
                      <i class="fa fa-book" aria-hidden="true"></i>
                      Reporting
                    </Link>
                    <Link to="/MarketingPage">
                      <i class="fa fa-users" aria-hidden="true"></i>
                      MarketingPage
                    </Link>
                    <Link to="/Sales">
                      <i class="fa fa-money" aria-hidden="true"></i>
                      Sales
                    </Link>
                    <Link to="/AppCMS">
                      <i class="fa fa-file-text" aria-hidden="true"></i>
                      App CMS
                    </Link>
                    <Link to="/UserManagementSystem">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      User Management System
                    </Link>
                    <Link to="/Liveclasses">
                      <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                      Live Classes
                    </Link>
                    <Link to="/Mentormodule">
                      <i class="fa fa-user-md" aria-hidden="true"></i>
                      Mentor Module
                    </Link>

                    <Link to="/livequiz">
                      <i class="fa fa-home"></i>Livequiz
                    </Link>
                  </Nav>
                </div>
              </div>
            </Col>

            <Col lg={9} className="content" ml-0>
              <Switch>
                <Route exact path="/" component={StatsPage}></Route>
                <Route exact path="/Reporting" component={Reporting}></Route>
                <Route
                  exact
                  path="/MarketingPage"
                  component={Marketing}
                ></Route>
                <Route exact path="/Sales" component={Sales}></Route>
                <Route exact path="/AppCMS" component={Appcms}></Route>
                <Route
                  exact
                  path="/UserManagementSystem"
                  component={UserManagementSystem}
                ></Route>
                <Route
                  exact
                  path="/Liveclasses"
                  component={Liveclasses}
                ></Route>
                <Route
                  exact
                  path="/MentorModule"
                  component={mentormodule}
                ></Route>
                <Route exact path="/Livequiz" component={Livequiz}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
