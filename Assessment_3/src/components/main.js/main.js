import React from 'react';
import Product from '../product/Product';
import Productslist from '../product/productslist';
import { FaShoppingCart } from 'react-icons/fa';


const MainComponent = ({products}) => {
  return (
    <div>
      <div class="name">
       <FaShoppingCart class="icon" />
      <span class="store-name"> Reem's Store</span>
      
      </div>
     

      <div className="product-list">
        {products.map(products => (
          <Product
            key={products.title}
            title={products.title}
            type={products.type}
            description={products.description}
            url={products.url}
            price={products.price}
            rating={products.rating}
          />
        ))}
      </div>
    </div>
  );
};

const Main=()=>{
  return <MainComponent products={Productslist}/>
}


export default Main;
