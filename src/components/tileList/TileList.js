import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <div>
      {data.map((tile, index)=>{
        return (
            <Tile key={index} tile={tile} />
        )
      })}
    </div>
  );
};
