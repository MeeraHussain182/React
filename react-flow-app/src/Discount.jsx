import { useState } from "react";

function Discount(){

    const originalPrice = 5999; 
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    const applyDiscount = (discountValue) => {
        if(discountValue === 10){
            setDiscount(originalPrice * 0.1);
            setPrice(price);
        } else if (discountValue ===20){
            setDiscount(originalPrice * 0.2);
            setPrice(price);
        } else if (discountValue ===30) {
            setDiscount(originalPrice * 0.3);
            setPrice(price);
        } else  {
            setDiscount(0);
            setPrice(price);
        }
      };
      return(
        <>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <h1> Original Prisce:${originalPrice}</h1>
        <h2> Discounted Price : ${discount.toFixed(2)}</h2>
       
       
       <p>Click a button apply a discount</p>
       <button style={{color:'green'}} onClick={()=> applyDiscount(10)}>Apply 10% Discount</button>
       <button style={{color:'blue'}} onClick={()=> applyDiscount(20)}>Apply 20% Discount</button>
       <button style={{color:'pink'}} onClick={()=> applyDiscount(30)}>Apply 30% Discount</button>
       <button style={{color:'red'}} onClick={()=> applyDiscount(0)}>Reset Price</button>
        </>

      )
}
export default Discount;