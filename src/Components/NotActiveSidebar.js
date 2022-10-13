import React from "react";
import { links } from "../data/dummy";
import {Link,NavLink} from 'react-router-dom'
import {DiDebian} from 'react-icons/di'
import { MdOutlineCancel } from "react-icons/md";
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import { useStateContext } from "../Contexts/ContextProvider";
const NotActiveSidebar = () => {
const {activeMenu,setActiveMenu,screenSize,currentColor}=useStateContext()
  
const handleCloseSidebar=()=>{
    if(!activeMenu !== undefined && screenSize<=900){
        setActiveMenu(false)
    }
}
     const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md '
    const normalLink="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
  return <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">

    <div className="flex justify-between items-center">
     <Link onClick={()=>{setActiveMenu(!activeMenu)}} style={{backgroundColor:currentColor}} className="items-center justify-center  flex text-2xl font-extrabold tracking-tight w-full h-20  dark:text-white text-white">

  <span>S</span>
   </Link>
   
     

    </div>
     <div className="mt-10">
        {links.map((item)=>(
            <div key={item.title}>
                
                {item.links.map((link)=>(
                    <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    style={({isActive})=>({
                        backgroundColor:isActive ? currentColor : '',
                    })}
                    className={({isActive})=>(isActive ? activeLink : normalLink)}
                    >{link.icon}
                  </NavLink>
                ))}
            </div>
        ))}
     </div>
  </div>;
};

export default NotActiveSidebar;
