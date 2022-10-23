import React from "react";
import Character from "./Character";

const CharacterList = ({ items }) => {
  return (
    <div className="character-list">
      {items.map((item) => (
        <Character key={item.char_id} item={item} />
      ))}
    </div>
  );
};

export default CharacterList;
