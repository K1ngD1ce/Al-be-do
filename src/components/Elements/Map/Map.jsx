import { useEffect } from "react";

const Map = ({ city }) => {
  useEffect(() => {
    if (!window.ymaps || !city) return;

    // Нужно очистить карту, если она уже существует.
    const mapContainer = document.getElementById("map");

    // Создаём карту только если она еще не была создана
    if (!mapContainer._map) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("map", {
          center: city.coordinates,
          zoom: 17,
          controls: [],
        });

        // Сохраняем объект карты в контейнере
        mapContainer._map = map;

        // Создаем кастомную метку с изображением
        const placemark = new window.ymaps.Placemark(
          city.coordinates,
          {
            hintContent: city.title,
          },
          {
            iconLayout: "default#image",
            iconImageHref: "src/assets/image/svg/dotOnMap.svg",
            iconImageSize: [24, 24],
            iconImageOffset: [-15, -42],
          }
        );

        // Добавляем метку на карту
        map.geoObjects.add(placemark);
      });
    } else {
      // Если карта уже была создана, применяем анимацию для изменения города
      const map = mapContainer._map;

      // 1. Отдаляем карту (уменьшаем зум)
      map.panTo([city.coordinates], {
        flying: true, // Анимация
        duration: 1000, // Время анимации
      });

      // 2. Плавно меняем центр карты на новый
      map.setCenter(city.coordinates, {
        duration: 1000,
      });

      // 3. Плавно увеличиваем зум
      map.setZoom(17, {
        duration: 1000,
      });
    }

    return () => {
      if (mapContainer._map) {
        mapContainer._map.destroy();
        delete mapContainer._map;
      }
    };
  }, [city]);

  return <div id="map" style={{ width: "100%", height: "233px" }}></div>;
};

export default Map;
