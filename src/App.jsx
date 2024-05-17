import './App.css'
import MyRoutes from './router/MyRoutes';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function App() {
  

  return (

    <div className='layout'>

    <MyRoutes/>
    
    </div>
  )
}

export default App
