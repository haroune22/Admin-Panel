
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/New/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs,productInputs } from "./formSource";
import './Style/dark.scss'
import { useContext } from "react";
import {DarkModeContext} from "./Context/darkModeContext"

function App() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div className={darkMode ?"app dark" : "dark"} >
      <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="users" >
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs={userInputs} title="Add New User" />}/>
        </Route>
        <Route path="products" >
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New inputs={productInputs} title='Add New Product'/>}/>
        </Route>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
