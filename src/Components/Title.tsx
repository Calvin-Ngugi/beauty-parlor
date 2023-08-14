import React from "react";

interface TitleProps {
  value: string;
}

const Title: React.FC<TitleProps> = ({ value }) => {
  return (
    <div className="translate-x-[-10%] translate-y-[1vw] -rotate-90 -ms-12">
      <h1 className="text-8xl text-purple-600">{value}</h1>
    </div>
  );
};

export default Title;
