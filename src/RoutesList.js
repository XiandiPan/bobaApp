import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Items from "./Items"
import Homepage from "./Homepage"
import ItemDetail from "./ItemDetail";


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
        <Route path="/ItemDetail" element={<ItemDetail />}></Route>
      </Routes>
    </div>
  );
}

export default RoutesList;