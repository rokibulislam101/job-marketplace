// BlogPost.js
import React from 'react';

const BlogPost = ({ title, content }) => {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default BlogPost;
