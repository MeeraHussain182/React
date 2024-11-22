import { useState } from "react";

function Apple(){
    const [apples,setApples] =useState(0);

    return(
        <>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <h1> Number of Apples : {apples}</h1>
        {apples===0 ?(
            <p>no apples left!</p>
        ):(
            <p>Woww You have some apples....</p>
        )}
        <button style={{color:'green'}}onClick={()=>setApples(apples + 1)}>Add One apple</button>
        <button style={{color:'red'}}onClick={()=>apples>0 && setApples(apples -1)}>Remove One apple</button>
        <button onClick={()=>setApples(0)}><b>Remove all </b></button>
        </>
    )
}
export default Apple;