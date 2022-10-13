import React,{useEffect} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Sidebar,Navbar,NotActiveSidebar,ThemeSettings } from "./Components";
import {Orders,Dashboard,Customers,Employees,Calendar, Kanban, Editor,ColorPicker,Line,Pie} from './pages'
import { useStateContext } from "./Contexts/ContextProvider";
import './App.css'
import Financial from "./pages/Charts/Financial";
import ColorMapping from "./pages/Charts/ColorMapping";
import Pyramid from "./pages/Charts/Pyramid";
import Stacked from "./pages/Charts/Stacked";
import Footer from "./Components/Footer";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const App = () => {
    const {activeMenu,setThemeSettings,currentColor,setCurrentColor,setCurrentMode,currentMode,themeSettings}=useStateContext()
useEffect(()=>{

    const currentThemeColor=localStorage.getItem('colorMode');
    const currentThemeMode=localStorage.getItem('themeMode')
    if(currentThemeColor && currentThemeMode){
        setCurrentColor(currentThemeColor)
        setCurrentMode(currentThemeMode)
    }
},[])

  return( 

<div className={currentMode === 'Dark' ? 'dark' : ''}>
  <BrowserRouter>
   
   
   <div className="flex relative dark:bg-main-dark-bg">
<div className="fixed bottom-8 right-4 md:bottom-4" style={{zIndex:'100000'}}>
    <TooltipComponent content="Settings" position="Top">
        <button
        type="button"
        onClick={()=>setThemeSettings(!themeSettings)}
        style={{background:currentColor,borderRadius:'50%'}}
        className="text-3xl settings-box text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
 <FiSettings />
        </button>
    </TooltipComponent>
</div>
   
   {activeMenu ?
    <div className="w-72 fixed sidebar bg-white dark:bg-main-dark-bg">
    <Sidebar />
   </div>
   :
   <div className="w-20  dark:bg-main-dark-bg">
    <NotActiveSidebar />
   </div>   
}

<div className={
    activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full': 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
}>
    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
        <Navbar />
    </div>
    <div>
    {themeSettings&&(<ThemeSettings/>)}
<Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/employees" element={<Employees />} />
    <Route path="/Calendar" element={<Calendar />} />
    <Route path="/Kanban" element={<Kanban />} />
    <Route path="/Editor" element={<Editor />} />
    <Route path="/color-picker" element={<ColorPicker />} />
    <Route path="/Line" element={<Line />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/financial" element={<Financial />} />
    <Route path="/color-mapping" element={<ColorMapping />} />
    <Route path="/pyramid" element={<Pyramid />} />
    <Route path="/stacked" element={<Stacked />} />
</Routes>

</div>
    <Footer />
   </div>
</div>
  </BrowserRouter>
</div>

)};

export default App;
