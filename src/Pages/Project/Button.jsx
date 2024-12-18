import React from "react";
import Data from "../../Data/ProjectData";

const Button = ({ data, filterItem, setData }) => {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-center p-5 py-24 gap-2 ">
        <button
          className="px-4 py-3 bg-black text-white uppercase rounded cursor-pointer"
          onClick={() => setData(Data)}
        >
          All
        </button>

        {data.map((val, id) => {
          return (
            <div key={id}>
              <button
                className="px-4 py-3 bg-black text-white uppercase rounded cursor-pointer"
                onClick={() => filterItem(val)}
              >
                {val}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Button;
