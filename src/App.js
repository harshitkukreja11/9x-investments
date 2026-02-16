import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import InvestmentProcess from "./pages/InvestmentProcess";
import MissionVision from "./pages/MisssionVision";
import FAQ from "./pages/Faq";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


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
 <Route path="/mission" element={<MissionVision />} />
 <Route path="/faq" element={<FAQ />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/privacy" element={<Privacy />} />
 <Route path="/terms" element={<Terms />} />

</Routes>
<Footer />
</BrowserRouter>
);
}


export default App;