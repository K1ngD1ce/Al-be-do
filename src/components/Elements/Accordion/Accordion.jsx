import Plus from "../../../assets/image/svg/plus.svg?react";
import { useState, useEffect, useRef } from "react";
import Servicesdata from "../../../assets/data/services.json";
import Tabs from "../Tabs/Tabs";
import ServicesTabContent from "../ServicesTabContent/ServicesTabContent";

export default function Accordion() {
  const [openId, setOpenId] = useState(null);
  const [accordionItems, setAccordionItems] = useState([]);
  const [currentTab, setCurrentTab] = useState(null);

  const accordionRefs = useRef([]);

  // Инициализация данных
  useEffect(() => {
    if (Servicesdata.accordionContent) {
      setAccordionItems(Object.entries(Servicesdata.accordionContent));
    }
  }, []);

  useEffect(() => {
    if (accordionItems.length > 0 && openId === null) {
      setOpenId(0);
      setCurrentTab(accordionItems[0][1].tabs[0].id);
    }
  }, [accordionItems]);

  const clickHandler = (id, tabs) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
      if (tabs && tabs.length > 0) {
        setCurrentTab(tabs[0].id);
      }
    }
  };

  useEffect(() => {
    accordionRefs.current.forEach((accordion, index) => {
      if (accordion) {
        if (index === openId) {
          // Плавно открываем аккордеон
          accordion.style.height = `${accordion.scrollHeight}px`;
          accordion.style.opacity = 1;
        } else {
          // Плавно скрываем аккордеон
          accordion.style.height = 0;
          accordion.style.opacity = 0;
        }
      }
    });
  }, [openId]);

  return (
    <>
      <ul className="list-reset accordion__list">
        {accordionItems.map(([title, data], index) => {
          if (!data || !data.tabs) return null;
          return (
            <li className="accordion__list-item" key={index}>
              <button
                className={`accordion__item-btn ${
                  openId === index ? "active" : ""
                }`}
                onClick={() => clickHandler(index, data.tabs)}
              >
                {title}
                <div className="btn__icon">
                  <Plus width="17.5" height="17.5" />
                </div>
              </button>
              <div
                className="accordion__item-colapse"
                ref={(el) => (accordionRefs.current[index] = el)}
                style={{
                  height:
                    openId === index
                      ? `${accordionRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  opacity: openId === index ? 1 : 0,
                  overflow: "hidden",
                  transition: "height 0.3s ease-out, opacity 0.3s ease-out",
                }}
              >
                <div className="accordion__item-content">
                  <Tabs
                    tabs={data.tabs}
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {accordionItems[openId]?.[1]?.tabs ? (
        accordionItems[openId][1].tabs.map((tab) => (
          <ServicesTabContent
            key={tab.id}
            img={tab.content.image}
            title={tab.content.title}
            text={tab.content.text}
            isActive={currentTab === tab.id}
          />
        ))
      ) : (
        <div className="accordion__empty">
          <p>Все вкладки скрыты, данных для отображения нет...</p>
          <span>Нажмите на вкладку, чтобы увидеть информацию</span>
        </div>
      )}
    </>
  );
}
