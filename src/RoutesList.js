import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Items from "./Items"
import Homepage from "./Homepage"


/** Site-wide routes.
 *
 * Visiting a non-existent route navigates to the homepage.
 */

function RoutesList() {
  console.debug("Routes");

  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/items" element={<Items />}/>
        <Route element={<Navigate to="/" /> } />
      </Routes>
    </div>
  );
}

export default RoutesList;