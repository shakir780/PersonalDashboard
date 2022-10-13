import React, { useContext, createContext, useState } from "react";
const StateContext = createContext();

const initialState = {
  cart: false,
  userProfile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor,setCurrentColor]=useState('#03C9D7')
  const [currentMode,setCurrentMode]=useState('Light')
  const [themeSettings,setThemeSettings]=useState(false)
  const [chat,setIsChat]=useState(false)

  
  const setMode=(e)=>{
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode',e.target.value)
  }
  const setColor=(color)=>{
    setCurrentColor(color);
    localStorage.setItem('colorMode',color)

  }

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        setIsClicked, 
        isClicked,
        handleClick,
        currentColor,
        themeSettings,
        setThemeSettings,
        setCurrentColor,
        setCurrentMode,
        currentMode,
        setColor,
        setMode,
        chat,
        setIsChat
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
