import React from "react";
import { AuthPorvider } from "./Context/contextAPI.js";
import R from "./Routes.js";

import GlobalStyle from "./style/StyleGlobal";


const App = () => {
  
  return (
    <div>
       <AuthPorvider>
        <GlobalStyle />
        <R />
      </AuthPorvider>
    </div>
  );
};

export default App;