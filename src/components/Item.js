import "./Item.css";
import { Tooltip, IconButton } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export function Item(props) {
  const [clicked, setClick] = useState(false);

  const clickHandler = () => {
    if (clicked) {
      props.updateFavorites(props.name, -props.time);
    } else {
      props.updateFavorites(props.name, props.time);
    }
    setClick(!clicked);
  };

  return (
    <div className="item">
      <img src={props.image} />
      <button className={clicked ? "liked" : "like"} onClick={clickHandler}>
        <FaHeart size={25} />
      </button>
      <div className="text">
        <h3>{props.name}</h3>
        <p className="labels">
          Type: <b>{props.type}</b>
          <br></br>
          Time Commitment: <b>{props.time} hours</b>
          <br></br>
          Meeting: <b>{props.meeting}</b>
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
