import axios from 'axios';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <div className="container">
               <h1>GitHub Users Data</h1>
               <Switch>
                  <Route exact path="/" component={Search} />
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
