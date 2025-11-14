import React from 'react';
import { useLoaderData } from 'react-router';
import Cards from '../Router/Cards/Cards';


const Allproperties = () => {
const properties = useLoaderData();
    


    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
            {
  properties.map((property)=>(

<Cards key={property.id} property ={property} ></Cards>
))
}
            
        </div>
    );
};

export default Allproperties;