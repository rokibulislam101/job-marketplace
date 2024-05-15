import React from 'react';
import { Link } from 'react-router-dom';

const SubBlogs = ({ data = {} }) => {
  const {
    _id,
    photoURL,
    displayName,
    title,
    number
  } = data;

  return (
    <div className="m-2 md:w-1/4">
      <div className="card card-compact flex-col justify-center w-full bg-base-100 shadow-xl overflow-hidden">
        <figure>
          <img src={photoURL} alt={displayName} className="object-cover rounded-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{displayName}</h2>
          <p>{title}</p>
          <p>{number}</p>
          <Link
            to={`/data/${_id}`}
            className="text-blue-500 hover:text-blue-700"
          >
            Read More -
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubBlogs;
