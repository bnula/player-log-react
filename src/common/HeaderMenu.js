import React from "react";
import "./HeaderMenu.css";

function HeaderMenu() {
   return (
      <ul className="header-menu">
         <li><a href="campaigns">Campaigns</a></li>
         <li><a href="characters">Characters</a></li>
         <li><a href="locations">Locations</a></li>
         <li><a href="npcs">Npcs</a></li>
         <li><a href="quests">Quests</a></li>
         <li><a href="armies">Armies</a></li>
      </ul>
   )
}

export default HeaderMenu;