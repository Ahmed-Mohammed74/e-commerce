import React from "react";
import Image from "next/image";
import errorImage from "./../../public/screens/404.jpg"
const ErrorPage = () => {
  return (
    <div className="w-full md:[80%] mx-auto px-5 my-5 md:px-0">
      <Image alt="" src={errorImage}>
      
      </Image>
    </div>
  );
};

export default ErrorPage;
