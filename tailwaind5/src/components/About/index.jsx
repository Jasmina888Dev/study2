import React from "react";
import Block from "../../Block";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about">
          <h1>about</h1>
          <div className="flex items-center justify-center flex-wrap gap-[70px] m-[50px]">
            <Block
              text={"hello"}
              title={"Lorem , rem quas doloribus? Dolorum maiores cupiditate 1"}
              btn={"link"}
            />
            <Block
              text={"welcome"}
              title={"Lorem , rem quas doloribus? Dolorum maiores cupiditate 2"}
              btn={"add"}
            />
            <Block
              text={"academy"}
              title={"Lorem , rem quas doloribus? Dolorum maiores cupiditate 3"}
              btn={"follow"}
            />
            <Block
              text={"motion web"}
              title={"Lorem , rem quas doloribus? Dolorum maiores cupiditate 4"}
              btn={"save"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
