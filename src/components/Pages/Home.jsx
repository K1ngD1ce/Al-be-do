import Intro from "../Panels/Intro/Intro";
import ProductCardsInfo from "../Panels/ProductCardsInfo/ProductCardsInfo";
import Catalog from "../Panels/Catalog/Catalog";
import Shops from "../Panels/Shops/Shops";
import GallerySlider from "../Panels/GallerySlider/GallerySlider";
import Services from "../Panels/Services/Services";
import OurClients from "../Panels/OurClients/OurClients";
import Vacancies from "../Panels/Vacancies/Vacancies";
import Order from "../Panels/Order/Order";

export default function Home() {
  return (
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
  );
}
