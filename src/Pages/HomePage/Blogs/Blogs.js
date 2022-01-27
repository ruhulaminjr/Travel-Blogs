import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Blog from "./Blog";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/gethomeblogs").then((result) => {
      setBlogsData(result.data);
    });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {blogsData.map((blogItem) => (
          <Blog key={blogItem._id} blog={blogItem} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
