import React, { useEffect, useState } from "react";
import loadData from "../services/loadData";
import TableHead from "../common/TableHead";
import Campaign from "./Campaign";

function CampaignList({ token }) {
   const [list, setList] = useState([]);
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const authToken = token;
   const itemType = "campaigns";
   const headers = ["Name", "Active"];
   
   useEffect(() => {
      loadData(authToken, itemType)
         .then((result) => {
               setIsLoaded(true);
               setList(result);
            },
            (error) => {
               setIsLoaded(false);
               setError(error);
            }
         )
   }, [authToken, itemType]);
   if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
         <table>
            <TableHead headers={headers}/>
            <tbody>
                  {list.map(item => (
                        <Campaign key={item.id}
                           name={item.name}
                           active={item.active}
                        />))}
            </tbody>
         </table>
      )
    }
}

export default CampaignList;