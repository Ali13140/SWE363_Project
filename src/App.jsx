import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return <SignUp></SignUp>;
}
export default App;
