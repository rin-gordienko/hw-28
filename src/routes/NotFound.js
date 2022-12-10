import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2 className="error-title">The page doesn't exist</h2>
      <p className="error-text">Oops, sth went wrong</p>

      <Link className="link" to="/">Go to Home page</Link>
    </>
  );
};

export default NotFound;
