export const Tabs = ({tabs, activeTabId, onTabSelected}) => {
  const selectedTab = tabs.find(tab=> tab.id === activeTabId) || tabs[0];
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab =>(
            <li
              key={tab.id}
              className={selectedTab.id === tab.id ? "is-active" : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={()=>{
                  if(tab.id !== selectedTab.id) {
                    onTabSelected(tab.id)
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          )))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </>
  )
};
