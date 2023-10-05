import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToolBar } from "./components/toolbar/toolbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hola</h1>
      {/* <BrowserRouter>
        <ToolBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App;
