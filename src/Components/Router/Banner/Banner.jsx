

import { use } from 'react';
import DisplayBanner from './DisplayBanner/DisplayBanner';
import { useLoaderData } from 'react-router';

const Banner = () => {
 const banner =useLoaderData()  
 console.log(banner);
 
  
  // const{  propertyName, category, image, location, price,shortDescription } =banner




    return (
<div className='container mx-auto'>
  <h2>total data {banner.length}</h2>
 
 
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
   {
    banner.map(item => <DisplayBanner key={item.id} item={item} > </DisplayBanner>)
  }
</div>

        </div>
    );
};

export default Banner;