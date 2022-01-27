import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Blog from "./Blog";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/gethomeblogs").then((result) => {
      setBlogsData(result.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className="container mx-auto h-full w-full flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }
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
