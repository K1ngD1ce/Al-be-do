import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useCallback, useRef } from "react";
import ProductCard from "../../Elements/productCard/ProductCard";
import Arrow from "../../../assets/image/svg/arrow-slide.svg?react";

export default function Catalog() {
  const [currentTab, setCurrentTab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const sliderRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const activeTab = tabs.find((tab) => tab.id === currentTab);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.swiper) {
      const swiperInstance = sliderRef.current.swiper;
      setTotalPages(Math.ceil(activeTab.products.length / 3));
    }
  }, [activeTab]);

  const handleSlideChange = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      const swiperInstance = sliderRef.current.swiper;
      setCurrentPage(Math.ceil(swiperInstance.activeIndex / 3) + 1);
    }
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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

          <div className="catalog__products">
            {activeTab ? (
              activeTab.products && activeTab.products.length > 0 ? (
                <>
                  <Swiper
                    ref={sliderRef}
                    spaceBetween={32}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    onSlideChange={handleSlideChange}
                  >
                    {activeTab.products.map((product) => (
                      <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper__controller-wrapper">
                    <div className="prev-arrow" onClick={handlePrev}>
                      <Arrow width="12" height="12" />
                    </div>

                    <span>
                      {currentPage} из {totalPages}
                    </span>

                    <div className="next-arrow" onClick={handleNext}>
                      <Arrow width="12" height="12" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="empty-message">Этих товаров еще нет :(</div>
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
