import { useEffect, useState } from "react";
import VacanciesCard from "../../Elements/VacanciesCard/VacanciesCard";
import vacanciesData from "../../../assets/data/vacancies.json";

export default function Vacancies() {
  const [vacancies, setVacancies] = useState(null);

  useEffect(() => {
    setVacancies(vacanciesData.vacancies);
  }, []);

  return (
    <section className="vacancies">
      <div className="container vacancies__container">
        <div className="vacancies__text">
          <h6 className="section__title vacancies__title">Вакансии</h6>
          <p className="vacancies__descr">
            Мы всегда в поисках талантов! Если вы скульптор или интересуетесь
            скульптурой — присоединяйтесь к нам!
          </p>
        </div>

        <div className="vacancies__cards-wrapper">
          {vacancies &&
            vacancies.map((vacancy) => (
              <VacanciesCard
                key={vacancy.id}
                title={vacancy.jobTitle}
                description={vacancy.description}
                img={vacancy.img}
                color={vacancy.colorCard}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
