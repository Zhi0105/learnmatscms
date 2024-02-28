import React from "react";

const Card = ({ grade }) => {
  return (
    <div className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
      <div className="p-4 text-white bg-gradient-to-r from-blue-500 to-purple-500">
        <h2 className="mb-2 text-xl font-semibold">{grade}</h2>
      </div>
      <div className="p-6">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          justo vel justo eleifend, sed pellentesque elit consectetur.
        </p>
      </div>
    </div>
  );
};

export default Card;
