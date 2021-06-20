import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './nav';
import Login from './login';
import Register from './register';
import Reclogin from './reclogin';
import Recregister from './recregister';
import ProtectedRoute from "./protectedroute";
import Addcompany from './addcompany';
import job from './job';
import Applied from './applied';
import viewcandidates from './viewcandidates';

function App() {
  return (
   <>
   <Router>
        <Nav></Nav>
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/reclogin" component={Reclogin} exact />
            <Route path="/recregister" component={Recregister} exact />
            <ProtectedRoute path="/addcompany/:id" component={Addcompany} exact />
            <ProtectedRoute path="/job/:id" component={job} exact />
            <ProtectedRoute path="/applied/:id" component={Applied} exact />
            <ProtectedRoute path="/viewcandidates/:id" component={viewcandidates} exact />
          </Switch>
        </div>
      </Router>

   </>
  );
}

export default App;
