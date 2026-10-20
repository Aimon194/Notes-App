import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url}>
        <div className="h-30  bg-cover w-30 f">
          <img
            className="h-full w-full rounded-2xl"
            src={props.elem.download_url}
            alt="Image"
          ></img>
        </div>
        <h4 className="text-xs text-white font-bold">{props.elem.author}</h4>
      </a>
    </div>
  );
};

export default Card;
