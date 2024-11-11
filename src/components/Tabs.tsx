import React, { useState } from 'react'
import { COLORS } from '../constants'

const TabContent = ({content}:{content:JSX.Element})=>{
    return <>
        <div className="flex-1 p-4">
          {content}
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

export const Tabs = ({tabs,isVertical}:{tabs:Array<{id:number,label:string,content:JSX.Element}>,isVertical:boolean})=>{
    const [activeTab, setActiveTab] = useState(0); // Initially, the first tab is active
  
    return (
      <div className="flex">
        <div style={{backgroundColor:COLORS.WHITE}} className={`flex flex-${isVertical?'col':'row'} w-48 p-2 border-r`}>
          {tabs.map((tab) => (
            <Button isActive={activeTab === tab.id}
              key={`${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              label={tab.label}/>
          ))}
        </div>
        <TabContent content={tabs[activeTab].content} />
      </div>
    )
}