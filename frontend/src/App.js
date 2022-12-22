import React, { useState } from "react";

import "./App.css";

function get_products(setProducts) {
  fetch(
    "http://udacity-storefront-backend-prod.eba-vmtydbqk.us-east-1.elasticbeanstalk.com/products"
  )
    .then(res=>{
      setProducts(res.json())
      console.log(res.json())
    }).catch(res=>{
      setProducts("Couldn't Get Products")
    })
}
function App() {
    const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <button onClick={()=>get_products(setProducts)}>Get Products</button>
      <p>{products.toString()}</p>
    </div>
  );
}

export default App;
