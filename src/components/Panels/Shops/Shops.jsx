import Select from "../../Elements/Select/Select";

export default function Shops() {
  return (
    <section className="shops">
      <div className="container">
        <div className="shops__upper">
          <h3 className="section__title">Магазины</h3>
          <Select options={["Москва", "Санкт-Петербург", "Новосибирск"]} />
        </div>
      </div>
    </section>
  );
}
