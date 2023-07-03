import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import View from "./components/View";

function App() {
  return (
    <>
      <div className="Header">
        <p>Todo React</p>
        <p>Level2</p>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="view" element={<View />} />
          <Route path="view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;