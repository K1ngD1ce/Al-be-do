import Header from "./components/Elements/Header/Header";
import Intro from "./components/Panels/Intro/Intro";
import ProductCards from "./components/Panels/ProductCards/ProductCards";
import Catalog from "./components/Panels/Catalog/Catalog";
import Logo from "./assets/image/svg/logo.svg?react";

export default function App() {
  return (
    <>
      <Header logo={<Logo width="212" height="20" />} />
      <main>
        <Intro />
        <ProductCards />
        <Catalog />
      </main>
    </>
  );
}
