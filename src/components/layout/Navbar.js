import { Link } from "react-router-dom"; 
import { ThemeContext } from '../ThemeContext';
import { useContext } from "react";

const Navbar = () => {
   const { theme, setTheme } = useContext(ThemeContext);

   function toggleTheme() {
      setTheme(theme === 'dark' ? "light" : "dark")
   }
   
   return (
      <nav className="navbar bg-success">
         <Link to="/">
            <h1>
               <i className="fab fa-github" /> GitHub Finder
            </h1>
         </Link>

         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
               <button  onClick={toggleTheme}>Toggle Theme</button>
            </li>
         </ul>
      </nav>
   );
};
export default Navbar;
