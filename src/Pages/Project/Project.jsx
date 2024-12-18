import React, { useState } from "react";
import ProjectBanner from "./ProjectBanner";

import Data from "../../Data/ProjectData";
import Card from "./Card";
import Button from "./Button";

const Project = () => {
  const [data, setData] = useState(Data);
  const itemcategory = [...new Set(Data.map((val) => val.category))];

  const filterItem = (cat) => {
    const newItem = Data.filter((val) => val.category === cat);
    setData(newItem);
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div>
        <ProjectBanner></ProjectBanner>
      </div>
      <div>
        <Button data={itemcategory} filterItem={filterItem} setData={setData} />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {data.map((val, id) => {
          return (
            <div key={id}>
              <Card data={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
