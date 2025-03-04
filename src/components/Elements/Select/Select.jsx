import { useState } from "react";
import Arrow from "../../../assets/image/svg/arrow-select.svg?react";

export default function Select({ options }) {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={`custom__select-wrapper ${open ? "open" : ""}`}>
      <div className="custom__select" onClick={() => setOpen(!open)}>
        {selected}
      </div>
      <ul className="custom__select-dropdown list-reset">
        {options.map((option, index) => (
          <li
            className="dropdown__item"
            key={index}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <div className="custom__select-arrow">
        <Arrow width="24" height="24" />
      </div>
    </div>
  );
}
