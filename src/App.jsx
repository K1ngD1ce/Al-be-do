import Logo from "./assets/image/svg/logo.svg?react";
import Header from "./components/Elements/Header/Header";
import Intro from "./components/Panels/Intro/Intro";
import ProductCardsInfo from "./components/Panels/ProductCardsInfo/ProductCardsInfo";
import Catalog from "./components/Panels/Catalog/Catalog";
import Shops from "./components/Panels/Shops/Shops";
import GallerySlider from "./components/Panels/GallerySlider/GallerySlider";
import Services from "./components/Panels/Services/Services";
import OurClients from "./components/Panels/OurClients/OurClients";
import Vacancies from "./components/Panels/Vacancies/Vacancies";
import Order from "./components/Panels/Order/Order";

export default function App() {
  return (
    <>
      <Header logo={<Logo width="212" height="20" />} />
      <main>
        <Intro />
        <ProductCardsInfo />
        <Catalog />
        <Shops />
        <GallerySlider />
        <Services />
        <OurClients />
        <Vacancies />
        <Order />
      </main>
    </>
  );
}
