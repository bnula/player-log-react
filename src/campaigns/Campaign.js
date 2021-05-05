import React from "react";

function Campaign({ name, active }) {
   return (
      <tr>
         <td>{name}</td>
         <td>{active}</td>
      </tr>
   )
}

export default Campaign;