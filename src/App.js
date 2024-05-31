import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { TextContext, TextProvider } from './components/TextContext';
const App = () => {
   return (
   <TextProvider>
         <div className="App">
            <Router>
               <Navbar />
               <Home />
            </Router>
         </div>
      </TextProvider>
   );
};
export default App; 