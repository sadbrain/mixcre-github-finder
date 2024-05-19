import axios from 'axios';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <div className="container">
               <h1>GitHub Users Data</h1>
               <Switch>
                  <Route exact path="/" component={Search} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/*" component={NotFound} />
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
