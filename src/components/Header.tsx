import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Title</h1>
      </Link>
    </div>
  );
};

export default Header;
