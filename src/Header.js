import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-section">
      <h1>Can's Journal</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/new-journal">Add New Journal</Link>
      </div>
    </nav>
  );
};

export default Header;
