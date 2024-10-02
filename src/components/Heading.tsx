import React from "react";

type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Heading;
