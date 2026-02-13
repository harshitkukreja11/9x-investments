import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import InvestmentProcess from "./pages/InvestmentProcess";

function App() {
return (
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/services" element={<Services />} />
 <Route path="/portfolio" element={<Portfolio />} />
 <Route path="/process" element={<InvestmentProcess />} />

</Routes>
<Footer />
</BrowserRouter>
);
}


export default App;