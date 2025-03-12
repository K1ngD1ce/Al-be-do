import Rook from "../../../assets/image/ourClients/rook.svg?react";
import Chartbeat from "../../../assets/image/ourClients/chartbeat.svg?react";
import Fossa from "../../../assets/image/ourClients/fossa.svg?react";
import UHGroup from "../../../assets/image/ourClients/unitedhealthGroup.svg?react";

export default function OurClients() {
  return (
    <section className="ourClients">
      <div className="container">
        <ul className="list-reset ourClients__list">
          <li>
            <a href="#">
              <Rook />
            </a>
          </li>
          <li>
            <a href="#">
              <Chartbeat />
            </a>
          </li>
          <li>
            <a href="#">
              <Fossa />
            </a>
          </li>
          <li>
            <a href="#">
              <UHGroup />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
