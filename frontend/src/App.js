import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRouter from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <PageRouter/>
    </BrowserRouter>
  );
}

export default App;
