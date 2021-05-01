import React from "react";

function Character({ name, level, desc, notes}) {
   return (
      <tr>
         <td>{name}</td>
         <td>{level}</td>
         <td>{desc}</td>
         <td>{notes}</td>
      </tr>
   );
};

export default Character;