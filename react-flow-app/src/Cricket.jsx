import { useState } from "react";

function Cricket(){
    const [count,setScore]= useState(0)

    const score1 =()=>{
                  setScore(count + 1)
    }

    const score2 =()=>{
                  setScore(count + 2)
    }
    const score3 = ()=>{
                   setScore(count + 3)
    }
    const score4 = ()=>{
                   setScore(count + 4)
    }
    const score6 = ()=>{
                   setScore(count + 6)
    }
    const reset = ()=>{
                   setScore(0)
    }

    return(
        <>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <h1>IPL 2024...</h1>
        <h1 style={{color:'red'}}> Cricket Score : {count}</h1>
        <button style={{color:'green'}} onClick={score1}> Score + 1</button>
        
        <button style={{color:'yellow'}} onClick={score2}> Score + 2</button>

        <button style={{color:'pink'}} onClick={score3}> Score + 3</button>
        <button style={{color:'blue'}} onClick={score4}> Score + 4</button>
        <button style={{color:'green'}} onClick={score6}> Score + 6</button>    
        <button style={{color:'red'}} onClick={reset }> Reset</button>
    
        </>
    )
}
 export default Cricket;