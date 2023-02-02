
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MemberView from "./pages/MemberView";

function App() {
  return (
    <div className="main-content">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/member/:id" element = {<MemberView />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
