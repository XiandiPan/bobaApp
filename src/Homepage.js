import React from "react";
import { Link } from "react-router-dom";
// import "./Homepage.css";

/** Homepage of site.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  console.debug("Homepage");

    const homepageStyle = {
      backgroundImage: 'url("https://img.freepik.com/free-vector/ad-template-bubbles-tea_52683-20018.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705795200&semt=ais")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
    };
  return (
    <div className="Homepage" style={homepageStyle}  >
      <div className="container text-center" >
        <h1 className="mb-4 fw-bold">Boba shop</h1>
        <p className="lead">Your favorite Boba spot</p>
        <Link ClassName="orderButton" to="/items">order here</Link>
      </div>
    </div>
  );
}

export default Homepage;