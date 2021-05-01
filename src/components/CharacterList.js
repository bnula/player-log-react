import React, { useState, useEffect } from "react";
import Character from "./Character";

function CharacterList({ token }) {
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);
   const secret_token = token.token;

   useEffect(() => {
      fetch(`http://localhost:4000/characters?secret_token=${secret_token}`)
         .then(res => res.json())
         .then(
            (result) => {
               setIsLoaded(true);
               setItems(result);
            },
            (error) => {
               setIsLoaded(false);
               setError(error);
            }
         )
   }, [secret_token]);
   
   if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Description</th>
          <th>Notes</th>
        </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <Character key={item.id}
              name={item.name}
              level={item.level}
              desc={item.description}
              notes={item.notes}
              />
          ))}
        </tbody>
        </table>
      );
    }
};

export default CharacterList;