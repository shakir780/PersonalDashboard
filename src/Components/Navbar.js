import React,{useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown, mdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups' 
import avatar from '../data/avatar.jpg'
import {Chat,Notification,UserProfile} from '.'
import { useStateContext } from '../Contexts/ContextProvider'
import { BsChatLeft } from 'react-icons/bs'
import SearchBar from './searchBar'
import { BiSearch } from 'react-icons/bi'

const NavButton=({title,customFunc,icon,color,dotColor})=>(
  <TooltipComponent
   content={title}
   position="BottomCenter"
  >
<button
type='button'
onClick={()=>customFunc()}
style={{color}}
className="relative text-xl rounded-full p-3 hover:bg-light-gray"
>
  <span
  style={{background:dotColor}}
  className="absolute inline-flex rounded-full h-3 w-3 right-2 top-2"
  />
  
  {icon}
</button>

  </TooltipComponent>
)

const Navbar = () => {

  const {activeMenu,setActiveMenu,handleClick,isClicked,setScreenSize,screenSize,currentColor}=useStateContext()
useEffect(()=>{
  const handleResize=()=>setScreenSize(window.innerWidth)
  window.addEventListener('resize', handleResize)
handleResize()
return ()=> window.removeEventListener('resize',handleResize)
},[])

useEffect(()=>{
  if(screenSize <= 900){
    setActiveMenu(false)
  }
  else{
    setActiveMenu(true)
  }
},[screenSize])

const handleActiveMenu=()=>setActiveMenu(!activeMenu)
  return (
   <div className='flex justify-between p-2   relative bg-white dark:bg-main-dark-bg h-15 md:h-22 overflow-hidden  md:w-auto w-auto  '>
    <div className='flex  items-center'>
    <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
     <NavButton title="search" color={currentColor} icon={<BiSearch />} />
     <SearchBar color={currentColor} />
    </div>
   
    <div className="flex mr-28 md:mr-0">
      <NavButton title="Chat" dotColor="#03c907" customFunc={()=>handleClick('chat')} color={currentColor} icon={<BsChatLeft />}/>
      <NavButton title="Notification" dotColor="rgb(254,201,15)" customFunc={()=>handleClick('notification')} color={currentColor} icon={<RiNotification3Line />}/>
      <TooltipComponent content="Profile" postion="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={()=>handleClick('userProfile')}
          >
            <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
            />
           
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
        </div>
      </TooltipComponent>
    {isClicked.chat && (<Chat />)}
    {isClicked.notification && (<Notification />)}
    {isClicked.userProfile && (<UserProfile/>)}
    </div>
   </div>
  )
}

export default Navbar