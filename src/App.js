
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import AddBlog from './componets/AddBlog';
// import ShowBlog from './componets/ShowBlog';
import Login from '../src/componets/Login'
import Signup from './componets/Signup';
import Newnev from './componets/Newnev';
import AllBlog from './componets/AllBlog';
import Myblog from './componets/Myblog';
function App() {
  return (
    <div>
   
      <Router>
      <Newnev/>
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route>

          <Route exact path="/sig">
          <Signup/>
          </Route>

          <Route exact path="/addBlog">
          <AddBlog/>
          </Route>

          <Route exact path="/allBlog">
          <AllBlog/>
          </Route>


          <Route exact path="/myblog">
          <Myblog/>
          </Route>
          
        </Switch>
      </Router>
  </div>
);
}

export default App;
