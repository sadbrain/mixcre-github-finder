import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
function App() {
 
   return (
      <div className="App">
         <Navbar />
         <div className="container">
            <h1>GitHub Users Data</h1>
            <Search />
         </div>
      </div>
   );
}

export default App;
