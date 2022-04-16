import { Link } from "react-router-dom";
import "./Style.css";

const Header = () => {
  return (
      <> 
         <div className="nav">
          <Link to="/">
            Home Page         
          </Link>
          <Link to="/cart">            
           Cart                       
          </Link>
        </div>
    </>
  )
}

export default Header