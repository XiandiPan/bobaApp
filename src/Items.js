import React from "react";
import { Link } from "react-router-dom";

// import "./CompanyCard.css";

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 *
 */

// function items({ name, description,size,sugar,topping}) {

//   return (
//     <Link className="CompanyCard card" to={`/companies/${handle}`}>
//       <div className="card-body">
//         <h6 className="card-title">
//           {name}
//           {logoUrl && <img src={logoUrl}
//             alt={name}
//             className="float-end ms-5" />}
//         </h6>
//         <p><small>{description}</small></p>
//       </div>
//     </Link>
//   );
// }

function Items(){
  return (
    <div>
      choices of Boba tea
      <Link ClassName="itemDetail" to="/ItemDetail">item detail</Link>
    </div>
  )
}

export default Items;
