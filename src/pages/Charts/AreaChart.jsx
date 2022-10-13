import React from 'react'
import{ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,SplineAreaSeries,Legend} from '@syncfusion/ej2-react-charts'
import { areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../Contexts/ContextProvider'

const AreaChart = () => {
  const {activeMenu,setActiveMenu,currentMode}=useStateContext()
  return (

    <div className={activeMenu ? 'mt-24 p-10 box-shadow dark:bg-transparent rounded-3xl md:mr-44 md:w-700 overflow-hidden':'mt-24   dark:bg-transparent rounded-3xl w-full md:w-1170 md:mr-44 overflow-hidden box-shadow' }>
        <div className='w-full mr-20'>
            <ChartComponent
            id="charts"
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{border:{width:0}}}
            background={'#fff'}
            legendSettings={{ background:'white'}}
            > 
            <Inject services={[SplineAreaSeries,DateTime,Legend]}/>
            <SeriesCollectionDirective>
                {areaCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>

            </ChartComponent>
        </div>
    </div>
  )
}

export default AreaChart