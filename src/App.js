import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Javascript from "./Components/Projects/Javascript";
import Mern from "./Components/Projects/Mern";
import Reactproject from "./Components/Projects/Reactproject";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero></Hero>}>
         <Route index element={<Javascript></Javascript>}></Route>
         <Route path='react' element={<Reactproject/>}></Route>
         <Route path='mern' element={<Mern/>}></Route>
        </Route>
       </Routes>
    </div>
  );
}

export default App;
