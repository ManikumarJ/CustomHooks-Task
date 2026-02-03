import React from "react";
import Counter from "./components/Count";
import FetchDisplayData from "./components/FetchDisplayData";

const App = () => {
  return (
    <div className="p-10">
      <Counter/>
      <FetchDisplayData/>
    </div>
  );
};

export default App
