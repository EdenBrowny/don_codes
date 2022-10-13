import React from "react";
import "./app.scss";
import Navbar from "./Component/Navbar/Navbar";
import Shape from "./Component/Shape/Shape";
import Text from "./Component/Text/Text";
import Test from "./Component/Test";
function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Test /> */}
      <Text />
    </div>
  );
}

export default App;
