import React from 'react'
import{ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,Tooltip,ColumnSeries,DataLabel} from '@syncfusion/ej2-react-charts'
import {barCustomSeries,barPrimaryXAxis,barPrimaryYAxis} from '../../data/dummy'
const BarChart = () => {
  return (
    <div className='box-shadow dark:bg-transparent rounded-3xl'>
      <div  >
                    
                    <p className="flex items-center justify-center mt-4 text-xl  font-semi-bold text-slate-400">Order Summary</p>
                   
                    </div>
      <div className="w-full">

      
           <ChartComponent
            id="charts-bar"
            primaryXAxis={barPrimaryXAxis}
            primaryYAxis={barPrimaryYAxis}
            tooltip={{enable:true}}
            chartArea={{border:{width:0}}}
            background={'#fff'}
            legendSettings={{background:'white'}}
            > 
            <Inject services={[ColumnSeries,Legend,Tooltip,Category,DataLabel]}/>
            <SeriesCollectionDirective>
                {barCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>

            </ChartComponent>
            </div>
    </div>
  )
}

export default BarChart