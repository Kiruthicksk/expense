import React from "react";
import Expense from "./Expense";
import Signin from "./Signin";
import Signup from "./Signup";
import { useContext } from "react";
import { Store } from "./Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}/> 
         <Route path="/" element={ <Expense/>}/>
         <Route path="/user/sign-up" element={<Signup/>}/>
         <Route path="/expense" element={<Expense/>}/>
         <Route path="/user/sign-in" element={ <Signin/>}/>
      </Routes>
    </Router>
  );
}
export default App;
