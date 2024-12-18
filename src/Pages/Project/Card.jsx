import React from "react";

const Card = ({ data }) => {
  return (
    <div className="m-2">
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg ">
        <div className="relative ">
          <img
            className="w-full transition-transform duration-700 ease-in-out hover:scale-95"
            src={data.photo}
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-300 text-black px-2 py-1 m-2 rounded-md text-sm font-medium">
            <p className="uppercase">{data.category}</p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{data.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
