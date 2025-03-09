export default function Tabs({ tabs, currentTab, setCurrentTab }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          className="tab__btn"
          key={tab.id}
          id={tab.id}
          disabled={currentTab === tab.id}
          onClick={() => setCurrentTab(tab.id)}
        >
          {tab.category}
        </button>
      ))}
    </div>
  );
}
