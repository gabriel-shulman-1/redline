import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/navBar.jsx";
import { Footer } from "./Components/footer.jsx";
import { HomeMain } from "./Components/homeMain.jsx";
import { PlanDetail } from "./Components/planDeatil.jsx";
import { Notify } from "./Components/notify.jsx";
import { Contact } from "./Components/contact.jsx";
import { Services } from "./Components/services.jsx";
import { Prices } from "./Components/prices.jsx";
import { PlanProvider } from "./context/cnt1.jsx";

function App() {
  return (
    <>
      <PlanProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeMain />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route path="/notify/:Name" element={<Notify />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/Prices" element={<Prices />}></Route>
            <Route path="/planDetail/:Id" element={<PlanDetail />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </PlanProvider>
    </>
  );
}
export default App;
