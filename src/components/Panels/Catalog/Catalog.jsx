import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";

export default function Catalog() {
  const [currentTab, setCurrentTab] = useState();
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  useEffect(() => {
    fetch("https://66cf3bae901aab248421750a.mockapi.io/items") // Запрос к MockAPI
      .then((response) => response.json()) // Преобразуем ответ в JSON
      .then((data) => {
        const formattedTabs =
          // Проверяем, что API вернул массив, и берём из него `tabs`
          Array.isArray(data) && data.length > 0 ? data[0].tabs : [];
        setTabs(formattedTabs);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Ошибка загрузки данных", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="catalog">
      <div className="container">
        <h3 className="section__title catalog__title">Каталог</h3>
        <div className="catalog__wrapper">
          <div className="catalog__tabs">
            {tabs.map((tab, i) => (
              <button
                className="tab__btn"
                key={i}
                id={tab.id}
                disabled={currentTab === `${tab.id}`}
                onClick={handleTabClick}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>

          <div className="content">
            {tabs.map(
              (tab) =>
                currentTab === tab.id && ( // Показываем только активный таб
                  <Swiper
                    key={tab.id}
                    spaceBetween={20} // Отступ между слайдами
                    slidesPerView={1} // Количество отображаемых слайдов
                    navigation // Включаем навигацию
                    modules={[Navigation]}
                  >
                    {/* Создаём несколько слайдов для каждого таба */}
                    {[...Array(5)].map((_, index) => (
                      <SwiperSlide key={index}>
                        <div className="contentCard">
                          <p>
                            {tab.title} - Слайд {index + 1}
                          </p>
                          <p>{tab.content}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
