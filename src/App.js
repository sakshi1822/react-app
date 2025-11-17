import "./App.css";
import Customer from "./componenets/Customer.jsx";
import Hero from "./componenets/Hero.jsx";
import KitchenwareSection from "./componenets/KitchenSection.jsx";
import Kitchenware from "./componenets/Kitchenware.jsx";
import Navbar from "./componenets/Navbar.jsx";
import PartnerBrand from "./componenets/PartnerBrand.jsx";
import ProductCategories from "./componenets/ProductCategories.jsx";
import TopBar from "./componenets/TopBar.jsx";
import Footer from "./componenets/Footer.jsx";
import FooterLinks from "./componenets/FooterLinks.jsx";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Kitchenware />
      <KitchenwareSection />
      <ProductCategories />
      <PartnerBrand />
      <Customer />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default App;
