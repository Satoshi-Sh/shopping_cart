import  { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import React, {useState} from "react";
import Nav from './nav/Nav'
import Home from './home/Home'
import Cart from './shopping/Cart'


function App() {
  const [order,setOrder]=useState({
    // name: [price,amount]
   'Chirashi Sushi':['12.00',0],
   'Futomaki':['10.00',0],
   'Ikura':['6.00',0],
   'Inari Sushi':['6.00',0],
   'Mackerel Sushi':['6.00',0],
   'Salmon Roll':['8.00',0],
   'Toro Nigiri':['9.00',0],
   'Unagi Nigiri':['5.00',0],
   'Nigiri Set':['14.00',0],
   'Gari':['1.00',0],
   'Wasabi':['1.00',0] 
  })

  const [amount,setAmount] =useState(0)
  const [total,setTotal] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
      <Nav amount={amount}/>
      <Routes>
        <Route path='/' element={<Home order={order}
                                       setOrder={setOrder}
                                       amount={amount}
                                        setAmount={setAmount}
                                        total={total}
                                        setTotal={setTotal}

                                       />}/>
        <Route path='order' element={<Cart order={order}
                                          setOrder={setOrder}
                                          setAmount={setAmount}
                                          setTotal={setTotal}
                                          amount ={amount}
                                          total = {total}
                                           />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
