import { useEffect, useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../../../assets/image/svg/arrow-slide.svg?react";
import Tabs from "../../Elements/Tabs/Tabs";
import GalleryData from "../../../assets/data/gallery.json";
import GalleryCards from "../../Elements/GalleryCards/GalleryCards";

export default function GallerySlider() {
  const sliderRef = useRef(null);
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const newTabs = GalleryData.tabsGallery.map((tab) => {
      if (!tab.images) return tab;

      const imagesWithType = tab.images.map((image, index) => ({
        ...image,
        type: index % 5 === 0 ? "big" : "small",
      }));

      return { ...tab, images: imagesWithType };
    });

    setTabs(newTabs);
    if (newTabs.length > 0) setCurrentTab(newTabs[0].id);
  }, []);

  const activeTab = tabs.find((tab) => tab.id === currentTab);

  useEffect(() => {
    if (!activeTab || !activeTab.images) return;

    const groupedImages = [];
    for (let i = 0; i < activeTab.images.length; i += 5) {
      if (activeTab.images.slice(i, i + 5).length < 5) continue;
      groupedImages.push(activeTab.images.slice(i, i + 5));
    }

    setTotalPages(groupedImages.length);
  }, [activeTab]);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="gallerySlider">
      <div className="container gallerySlider__container">
        <div className="gallerySlider__tabs-wrapper">
          <h4 className="section__title">Галерея</h4>
          <Tabs
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>

        <div className="gallerySlider__images">
          <>
            <Swiper
              ref={sliderRef}
              onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
              spaceBetween={32}
            >
              {activeTab &&
                activeTab.images.length > 0 &&
                Array.from({ length: totalPages }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <GalleryCards
                      images={activeTab.images.slice(index * 5, index * 5 + 5)}
                    />
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
        </div>
      </div>
    </section>
  );
}
