import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import ProductCard from "../../Elements/productCard/ProductCard";

export default function Catalog() {
  const [currentTab, setCurrentTab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);

  const handleTabClick = (e) => {
    setCurrentTab(Number(e.target.id));
  };

  useEffect(() => {
    fetch("https://66cf3bae901aab248421750a.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => {
        // Извлекаем табы и их товары
        const formattedTabs =
          Array.isArray(data) && data.length > 0 ? data[0].tabs : [];
        setTabs(formattedTabs);

        // Устанавливаем первый таб активным
        if (formattedTabs.length > 0) {
          setCurrentTab(formattedTabs[0].id);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных", error);
        setLoading(false);
      });
  }, []);

  // Находим текущую активную категорию
  const activeTab = tabs.find((tab) => tab.id === currentTab);

  return (
    <section className="catalog">
      <div className="container">
        <h3 className="section__title catalog__title">Каталог</h3>
        <div className="catalog__wrapper">
          <div className="catalog__tabs">
            {/* Отображаем кнопки табов */}
            {tabs.map((tab) => (
              <button
                className="tab__btn"
                key={tab.id}
                id={tab.id}
                disabled={currentTab === tab.id}
                onClick={handleTabClick}
              >
                {tab.category} {/* Заголовок категории */}
              </button>
            ))}
          </div>

          <div className="content">
            {activeTab ? (
              activeTab.products && activeTab.products.length > 0 ? (
                <Swiper
                  spaceBetween={32}
                  slidesPerView={3} // Можно изменить количество отображаемых слайдов
                  navigation
                  modules={[Navigation]}
                >
                  {activeTab.products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p className="empty-message">Этих товаров еще нет :(</p>
              )
            ) : (
              <p>Загрузка...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
