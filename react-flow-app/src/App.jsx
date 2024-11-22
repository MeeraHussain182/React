


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
/*
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function App()
{

return(
  <>
  <h1>This is App.jsx File</h1>
  <h2>Hi..meera..</h2>
  <AboutUs/>
  <ContactUs/>
  </>
)


}
export default App;*/
/*
import Apple from "./Apple";
import Cart from "./Cart";
import Cricket from "./Cricket";
import Discount from "./Discount";


function App (){
  return(
  <> 
  <h1> react.....</h1>
   <Cart/>
   <Apple/>
   <Cricket/>
   <Discount/>
   
  </>
  )
}

*/


import Blog from "./Blog";
import CoursGoal from "./CoursGoal";
import Apps from "./Apps";

function App (){
  return(

    <>
        
        <CoursGoal  title = 'learn React' description = 'in-depth'/>
        <CoursGoal title = 'About Ratan Sir' description = 'Ratan sir is nice'/> 
        <br></br>
        <Blog/>
        <Apps />
    </>
  )
}
export default App;














