import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useCallback, useRef } from "react";
import ProductCard from "../../Elements/productCard/ProductCard";
import SkeletonCatalogCard from "../../Elements/Skeletons/SkeletonCatalogCards/SceletonCatalogCards";
import Arrow from "../../../assets/image/svg/arrow-slide.svg?react";
import Tabs from "../../Elements/Tabs/Tabs";

export default function Catalog() {
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentTab, setCurrentTab] = useState(null);
  const [tabs, setTabs] = useState([]);

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

  useEffect(() => {
    fetch("https://66cf3bae901aab248421750a.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => {
        const formattedTabs =
          Array.isArray(data) && data.length > 0 ? data[0].tabs : [];
        setTabs(formattedTabs);
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

  const activeTab = tabs.find((tab) => tab.id === currentTab);

  useEffect(() => {
    if (activeTab) {
      setTotalPages(Math.ceil(activeTab.products.length / 3));
    }
  }, [activeTab]);

  return (
    <section id="catalog" className="catalog">
      <div className="container">
        <div className="catalog__wrapper">
          <div className="catalog__tabs">
            <h3 className="section__title catalog__title">Каталог</h3>
            <Tabs
              tabs={tabs}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </div>
          <div className="catalog__products">
            {loading ? (
              <Swiper
                ref={sliderRef}
                spaceBetween={32}
                slidesPerView={3}
                slidesPerGroup={3}
                onSlideChange={handleSlideChange}
              >
                {/* Скелетоны для карточек */}
                {[...Array(6)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <SkeletonCatalogCard />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : activeTab &&
              activeTab.products &&
              activeTab.products.length > 0 ? (
              <>
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
              </>
            ) : (
              <div className="empty-message">
                <p>Эта коллекция пока недоступна.</p>
                <span>
                  Следите за обновлениями — скоро здесь появятся уникальные
                  скульптуры
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
