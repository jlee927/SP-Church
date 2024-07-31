import "../assets/styles/navbar.css";
import React from "react";

export default function Dropdown(props) {
   const linkNames = props.linkNames || [];

   let links = linkNames.map((link, index) => {
      return (
         <a key={index} href="#">
            {link}
         </a>
      );
   });
   return (
      <div>
         <div className="dropdown">
            <button>
               {props.name} <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">{links}</div>
         </div>
      </div>
   );
}
