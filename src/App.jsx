import { useState } from 'react'
import Navbar from './Components/Header/Navbar';
import Banner from './Components/Header/Banner';
import Players from './Components/Players/Players';


function App() {
  const [coin,setCoin]=useState(0)
  const claimCoin=()=>{
    const newCoin= coin+ 6000000;
    setCoin(newCoin)


  }

  return (
    <>
    <Navbar coin={coin}></Navbar>
    <Banner claimCoin={claimCoin} ></Banner>
    <Players></Players>
     
    </>
  )
}

export default App
