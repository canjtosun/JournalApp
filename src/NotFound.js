import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry!</h1>
      <p>The Page is not found</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFound;
