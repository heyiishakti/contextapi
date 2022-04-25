import { Link } from "react-router-dom";
import "./Style.css";

const Header = ({ like}) => {

  return (
      <> 
         <div className="nav">
        <Link to="/" className="link" >
            Home      
          </Link>
          <Link to="/like" className="link" >            
            Liked({like.length})                  
          </Link>
        </div>
    </>
  )
}

export default Header