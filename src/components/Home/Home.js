import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Book List App</h1>
      <p>Keep track of your favorite books</p>
      <Link className="home-container-link" to="/booklists">
        Check your Books
      </Link>
    </div>
  );
};
