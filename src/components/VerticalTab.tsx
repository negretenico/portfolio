import React, { useState } from 'react'
import { COLORS } from '../constants'

const TabContent = ({label,content}:{label:string,content:any})=>{
    return <>
        <div className="flex-1 p-4">
          <h2 className="text-xl font-bold">{label}</h2>
          <p className="mt-2">{content}</p>
        </div>
        </>
}
const Button = ({ onClick,key,isActive,label}:{onClick: ()=>void,key:string,isActive:boolean,label:string})=>{
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const className = `py-2 px-4 text-left rounded-lg w-full mb-2 transition-colors`;
  
    // Set the background and text color based on the state
    const backgroundColor = isActive
      ? COLORS.VIOLET
      : isHovered
      ? COLORS.LIGHT_VIOLET // Add hover color
      : COLORS.WHITE;
  
    const textColor = (isActive || isHovered) ? COLORS.WHITE : COLORS.BLACK; 
       return (<button style={{
        backgroundColor,
        color: textColor
    }} key={key} onClick={onClick}  onMouseEnter={handleMouseEnter} // Trigger hover effect
    onMouseLeave={handleMouseLeave}  className={className}>{label}</button>)
}

export const VerticalTab = ()=>{
    const [activeTab, setActiveTab] = useState(0); // Initially, the first tab is active
  
    const tabs = [
      { id: 0, label: "Tab 1", content: "Content for Tab 1" },
      { id: 1, label: "Tab 2", content: "Content for Tab 2" },
      { id: 2, label: "Tab 3", content: "Content for Tab 3" },
      { id: 3, label: "Tab 4", content: "Content for Tab 4" },
    ];
  
    return (
      <div className="flex">
        <div style={{backgroundColor:COLORS.WHITE}} className="flex flex-col w-48 p-2 border-r">
          {tabs.map((tab) => (
            <Button isActive={activeTab === tab.id}
              key={`${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              label={tab.label}/>
          ))}
        </div>
        <TabContent label={tabs[activeTab].label} content={tabs[activeTab].content} />
      </div>
    )
}