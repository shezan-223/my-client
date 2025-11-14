import React from "react";

const Cards = ({ property }) => {
  console.log(property);
  const { _id, propertyName, category, image, location, price,shortDescription } =
    property;

  return  ( <div className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg ">
            
      {/* Cover Photo */}
      <img
        src={image}
        alt={""}
        className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72"
      />

      {/* Game Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{propertyName}</h3>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-sm text-gray-600">Location: {location}</p>
        <p className="text-sm text-yellow-600 font-medium mt-2">
          ⭐ Price: {price}
        </p>
      </div>
    </div>)
};

export default Cards;
// id: '6916bdc0184aaec372f90540', propertyName: 'Greenview Duplex Villa', category: 'Villa', shortDescription: 'Spacious duplex villa surrounded by greenery.', location: 'Mirpur DOHS, Dhaka', …}
// category
// : 
// "Villa"
// image
// : 
// "https://images.unsplash.com/photo-1598928506311-c55dedb4ac79"
// location
// : 
// "Mirpur DOHS, Dhaka"
// price
// : 
// 32000000
// propertyName
// : 
// "Greenview Duplex Villa"
// shortDescription
// : 
// "Spacious duplex villa surrounded by greenery."
// _id
// : 
// "6916bdc0184aaec372f90540"