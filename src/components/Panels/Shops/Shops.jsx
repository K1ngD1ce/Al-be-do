import { useState, useEffect } from "react";
import Select from "../../Elements/Select/Select";
import ShopsContent from "../../Elements/ShopsContent/ShopsContent";
import citiesData from "../../../assets/data/mapconfig.json";

export default function Shops() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setCities(citiesData); // Загружаем города из JSON
  }, []);

  useEffect(() => {
    if (cities.length > 0) {
      setSelectedCity(cities[0]); // Устанавливаем первый город из списка
    }
  }, [cities]);

  const handleCityChange = (cityName) => {
    const selected = cities.find((city) => city.city === cityName);
    setSelectedCity(selected); // Обновляем выбранный город
  };

  return (
    <section className="shops">
      <div className="container">
        <div className="shops__upper">
          <h3 className="section__title">Магазины</h3>
          {/* Передаем выбранный город в Select */}
          <Select
            options={cities.map((city) => city.city)}
            selectedCity={selectedCity ? selectedCity.city : ""}
            onChange={handleCityChange}
          />
        </div>
        {/* Показываем ShopsContent только когда выбран город */}
        {selectedCity && <ShopsContent city={selectedCity} />}
      </div>
    </section>
  );
}
