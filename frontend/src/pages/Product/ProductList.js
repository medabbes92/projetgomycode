import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Navebar from "../../component/Navebar/Navebar";
import { Produits } from "../../redux/action";
import NvBarProduct from "./NvBarProduct";

const ProductList = () => {

  // input state
const [text, setText] = useState("");
const [search, setSearch] = useState("");
const handleText = (e) => {
  setText(e.target.value)
}
const handleSearch = (text, e) => {
  e.preventDefault();
  setSearch(text);
};

// select state category
const [cat, setCat] = useState("all");
const handleCat = (newcat) => {
  setCat(newcat);
};


  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(Produits());
  }, []);
  const { product,loading } = useSelector((state) => state.ProductReducer);
console.log(product)
  return (
    <div
    
    >
      <Navebar  />
       <NvBarProduct handleCat={handleCat} handleSearch={handleSearch} text={text} handleText={handleText}  /> 

 <div 
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
    marginTop:"-100px"
      }}>

      {loading? <h1>Loading....</h1> : 
      
      
      
      product
      ?.filter((el) =>
      el.nom
        ?.trim()
        .toUpperCase()
        .includes(search.trim().toUpperCase())
    )
    ?.filter((el) => {
      if (cat === "irrigation") {
        return el.categorie === "irrigation";
      } else if (cat === "engrais") {
        return el.categorie === "engrais";
      } else if (cat === "machinisme") {
        return el.categorie === "machinisme";
      } else {
        return el;
      }
    })
      
      
      
      .map((el) => (
          <ProductCard key={el._id} el={el} />
        ))}
        </div>
    </div>
  );
};

export default ProductList;