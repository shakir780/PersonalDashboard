import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
import { earningData,medicalproBranding,recentTransactions,weeklyStats,dropdownData,SparklineAreaData,progressData,Crew,Activities } from '../data/dummy'
import AreaChart from './Charts/AreaChart'
import BarChart from './Charts/BarChart'
import { useStateContext } from '../Contexts/ContextProvider'
import ProgressBar from '../Components/ProgressBar'
import TodoList from '../Components/Todo'
import { IoIosMore } from 'react-icons/io'
import SparkLine from '../Components/Charts/SparLine'
import Button from '../Components/Button'
import Map from '../Components/Map'
const Dashboard = () => {
    const{activeMenu,setActiveMenu,currentColor,currentMode}=useStateContext()

    const DropDown=()=>(
        <div className='w-28 border-1 border-b-orange-50 px-2 py-1 rounded-md'>
            <DropDownListComponent id="time" fields={{text:'Time',value:'Id'}} style={ currentMode === 'Dark' ? {border:'none', color:'white',backgroundColor:'transparent'}: {border:'none', color:'black'}} value="1" dataSource={dropdownData} popupHeight="220px" popWidth="120px" />
        </div>
    )
  return (
    <>
      <div className="mt-20">
        <div className="flex-wrap lg:flex-nowrap justify-center w-full">

        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
            {earningData.map((item)=>(
            <div key={item.title}  style={ currentMode === 'Dark' ? {backgroundImage:item.darkbg} : {backgroundImage:item.bg} } className='h-44 earnings dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                <button 
                    style={{color:item.iconColor,backgroundColor:item.iconBg}}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                    >
                        {item.icon}
                </button>
                <p className="mt-3">
                    <span className="text-lg text-white font-semi-bold">{item.amount}</span>
                    <span className={`text-lg ${item.pcColor} ml-2`}>{item.percentage}</span>

                </p>
                <p className="text-xl font-bold text-white mt-1">{item.title}</p>
            </div>
            ))}
        </div>
        </div>
        <div className="flex gap-10 m-4 flex-wrap justify-center">
            
     <div className={activeMenu ? 'bg-white box-shadow dark:text-gray-200 dark:bg-transparent p-6 rounded-2xl w-40 md:w-760' :'bg-white dark:text-gray-200 dark:bg-transparent p-6 rounded-2xl w-full md:w-1000 box-shadow' }>
        
     <div className="flex justify-between items-center gap-2 mb-10">
                <div  >
                    
                <p className="text-xl font-semi-bold">Products Sales</p>
                <p className="text-sm font-light text-slate-400 mb-4 mt-4">Total Earnings of the Month</p>
                <p className="text-2xl font-extra-bold">$ 12,555</p>
                </div>
                  <DropDown />
                
                </div>
                
                <div>
                    <AreaChart />
                </div>
        </div>
     </div>

     <div className="flex  flex-wrap md:flex-wrap justify-center">
        <div className="md:w-400 w-full bg-white dark:text-gray-200 dark:bg-transparent rounded-2xl p-6 m-3">
        
            <BarChart />
        </div>
        <div className="md:w-400 w-full bg-white  dark:text-gray-200 dark:bg-transparent box-shadow rounded-2xl p-6 m-3">
        <p className="text-lg font-extra-bold text-slate-500">Order Overview</p>
        <h1 className="text-xl font-extra-bold mt-3 mb-3">5556</h1>
        <p className="text-sm font-semi-bold text-slate-500">Total revenue</p>

        {progressData.map((item,idx)=>(
            
            <div key={item.id}>
                <div className='mt-8 text-xl'>
                {item.number}
                <div className='mt-1 mb-2 text-sm '>
              
                    {item.text} 
                  <div className='float-right text-slate-400'>
                    {item.percentage}
                  </div>
                </div>

                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />

                    
                </div>
                
            </div>
        ))}

        </div>
        <div className="md:w-400 w-full bg-white  dark:text-gray-200 dark:bg-transparent box-shadow rounded-2xl p-6 m-3">
            <TodoList />
        </div>
     </div>

     <div className="flex m-3 flex-wrap justify-center gap-8 items-center">
        {Crew.map((item)=>(
          <div key={item.id} className="bg-white h-full dark:text-gray-200 dark:bg-transparent md:w-56 p-4 pt-9 rounded-2xl box-shadow">
            <div className="flex flex-col items-center">
                <img className='rounded-full w-28' src={item.img} />
                <p className="mt-3">
                    <span className="text-lg font-semibold">{item.name}</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{item.title}</p>
               
            </div>
          </div>
        ))}
     </div>

    <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-transparent rounded-2xl box-shadow p-6 m-3">
            <div className="flex justify-between">
                <div className="text-xl font-semi-bold">Weekly Stats</div>
                <button type='button' className="text-xl font-semibold text-gray-500">
                    <IoIosMore />
                </button>
            </div>
            <div className="mt-10">
                {weeklyStats.map((item)=>(
                <div key={item.title} className="flex justify-between mt-4 w-full">
                    <div className="flex gap-4">
                        <button
                        type="button"
                        style={{background:item.iconBg}}
                        className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                        >{item.icon}</button>
                    <div>
                        <p className="text-md font-semi-bold">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                    </div>
                <p className={ `${item.pcColor}`}>{item.amount}</p>
                </div>
                
                ))}
            </div>
            <div className="mt-4">
                <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242,252,253)" />
            </div>
        </div>

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-transparent box-shadow rounded-2xl p-6 m-3">
            <div className="flex justify-between">
                <p className="text-xl font-semi-bold">MedicalPro Branding</p>
                <button type='button' className='text-xl font-semibold text-gray-400'>
                    <IoIosMore />
                </button>
            </div>
        <p className='text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 text-gray-200 mt-10 text-center'>16 APR, 2021</p>
        <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item)=>(
                <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                    <p className="text-xs text-gray-400">{item.title}</p>
                    <p className="text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
        <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
                {medicalproBranding.teams.map((item)=>(
                <p
                key={item.name}
                style={{background:item.color}}
                className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >{item.name}</p>
                ))}
            </div>
        </div>
        <div className="mt-2">
            <p className="text-md font-semi-bold mb-2">Leaders</p>
            <div className="flex gap-4">
                {medicalproBranding.leaders.map((item,index)=>(
                    <img key={index} className="rounded-full w-8 h-8" src={item.image} alt=""/>
                ))}
            </div>
        </div>
        <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
                <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
                />
            </div>
            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
        </div>
        </div>
        <div className='w-400 bg-white dark:text-gray-200 dark:bg-transparent box-shadow rounded-2xl p-6 m-3'>
        <div className="flex justify-between">
                <p className="text-xl font-semi-bold mb-5">Daily Activities</p>
                <button type='button' className='text-xl font-semibold text-gray-400'>
                    <IoIosMore />
                </button>
            </div>
            {Activities.map((item)=>(
              <div className=' border-b-1 border-color flex justify-center ' key={item.id}>
                <div className='flex justify-between'>
                <img className='rounded-full w-8 h-8 mr-6' src={item.img} />
                    <div>
                    
                    <h3 className='font-bold text-base mr-5'>{item.heading}</h3>
                    <p className='text-sm'>{item.subheader}</p>

                    </div>
                      <p className='text-xs text-slate-400'>{item.date}</p>
                    
                   
                </div>

              </div>
            ))}
        </div>
        </div>
     <div className="flex gap-10 m-4 flex-wrap justify-center">
    
     <div className={activeMenu ? 'bg-white box-shadow dark:text-gray-200 dark:bg-transparent p-6 rounded-2xl w-96 md:w-760' :'bg-white dark:text-gray-200 dark:bg-transparent p-6 rounded-2xl w-96 md:w-1000 box-shadow' }>
     <p className="text-xl font-bold mb-2">Store Location</p>
        <Map />
    </div>
    </div>
    </div>
        </>
  )
}

export default Dashboard