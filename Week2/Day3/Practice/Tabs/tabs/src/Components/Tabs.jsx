import React, { useState } from 'react';
import "./Tabs.css"
const Tabs = ({ items }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    return (
        <div className="tabs-container">
            <div className="tab-headers">
                {items.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleTabClick(index)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {items[activeTabIndex].content}
            </div>
        </div>
    );
};

export default Tabs;
