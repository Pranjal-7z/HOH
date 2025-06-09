import React from "react";
import Home from "./pages/home";
import SmoothScroll from "./components/SmoothScroll";

const App = () => {
  return (
    <div>
      <SmoothScroll>
        <Home />
      </SmoothScroll>
      {/* <Home/> */}
    </div>
  );
};

export default App;
