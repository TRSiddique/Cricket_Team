import { useState } from "react";
import Navbar from "./Components/Header/Navbar";
import Banner from "./Components/Header/Banner";
import Players from "./Components/Players/Players";

function App() {
  const [coin, setCoin] = useState(0);
  const claimCoin = () => {
    const newCoin = coin + 6000000;
    setCoin(newCoin);
  };



  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const handleIsActive = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "Available",
      });
    } 
    
    else {
      setIsActive({
        cart: false,
        status: "Selected",
      });
    }
   
  };
 

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner claimCoin={claimCoin}></Banner>
      <Players coin={coin} isActive={isActive} handleIsActive={handleIsActive}></Players>
    </>
  );
}

export default App;
