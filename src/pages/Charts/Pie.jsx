import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../Components';

const Pie = () => (
  <div className=" m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl md:flex justify-center items-center  dark:bg-transparent box-shadow ">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;