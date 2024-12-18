import React from "react";

const PreLoader = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </div>
  );
};

export default PreLoader;
