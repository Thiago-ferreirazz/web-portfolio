import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className= "btn btn-lg"
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;