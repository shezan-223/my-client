import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../Banner';

const DisplayBanner = ({item}) => {
    const { propertyName, category, image, location, price,shortDescription} = item;
    console.log(item);
    
    
    


    return (
        <div className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg ">
            
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
    </div>
    );
};

export default DisplayBanner;