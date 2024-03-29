import React from "react";
import AreaChart from "../../components/Charts/AreaChart";

import { ChartsHeader, LineChart } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { activeMenu } = useStateContext();
  console.log(activeMenu);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className="w-full">
        <AreaChart />
      </div>
    </div>
  );
};

export default Area;
