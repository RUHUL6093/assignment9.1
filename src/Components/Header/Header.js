import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row header-area ">
            <div className="col-12 col-md-6">
              <h2 className="pt-2 text-white">BD Travelers</h2>
            </div>
            <div className="col-12 col-md-6">
              <nav>
                <Link to="/home">
                  <p>Home</p>
                </Link>
                <Link to="/destination">
                  <p>Destination</p>
                </Link>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
                <Link to="/login">
                  <p>
                    {loggedInUser.email
                      ? loggedInUser.name || loggedInUser.displayName
                      : "Log In"}
                  </p>
                </Link>
                <br />
                {loggedInUser.email && (
                  <button onClick={() => setLoggedInUser({})}>Log Out</button>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
