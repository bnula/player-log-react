import React from "react";

function TableHead({ headers }) {
   return (
         <thead>
            <tr>
               {headers.map((hdr, index) => (
                  <th key={index}>{hdr}</th>
               )
               )}
            </tr>
         </thead>
   )
}

export default TableHead;