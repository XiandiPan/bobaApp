import React from "react";
// import "./Homepage.css";

/** Homepage of site.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  console.debug("Homepage");

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Boba shop</h1>
        <p className="lead">Your favorite Boba spot</p>
      </div>
    </div>
  );
}

export default Homepage;