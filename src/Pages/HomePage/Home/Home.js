import React from "react";
import Blogs from "../Blogs/Blogs";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Blogs/>
    </div>
  );
};

export default Home;
