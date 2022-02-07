import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
