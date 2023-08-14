import React from "react";

interface TitleProps {
  value: string;
}

const Title: React.FC<TitleProps> = ({ value }) => {
  return (
    <div className="translate-x-2 translate-y-40 rotate-90 -ms-12">
      <h1 className="text-7xl text-purple-600">{value}</h1>
    </div>
  );
};

export default Title;
