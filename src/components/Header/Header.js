import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const changeMobile = () => {
    setMobile(!mobile);
  };
  return (
    <div className="header">
      <h3 className="logo">Book List</h3>
      <nav className="navBar">
        <ul className="navBar-ul">
          <Link className="navBar-ul-li" to="/booklist" exact>
            Home
          </Link>
          <Link className="navBar-ul-li" to="/booklists">
            Booklists
          </Link>
        </ul>
        <button
          className={`mobileMenu ${!mobile ? "" : "rotate"}`}
          onClick={changeMobile}
        >
          <li className="mobileMenuLine" id="line1"></li>
          <li className="mobileMenuLine" id="line1"></li>
          <li className="mobileMenuLine" id="line1"></li>
        </button>
      </nav>
    </div>
  );
};

export default Header;
