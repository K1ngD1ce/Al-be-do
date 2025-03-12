import Accordion from "../../Elements/Accordion/Accordion";

export default function Services() {
  return (
    <section className="services">
      <div className="container services__container">
        <h5 className="section__title services__title">Услуги</h5>

        <div className="services__content">
          <Accordion />
        </div>
      </div>
    </section>
  );
}
