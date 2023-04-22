import Home from "./screens/Home/Home"
import Login from "./screens/Login/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact Component={Login}/>
        <Route path="/login"  Component={Login}/>
        <Route path="/home" Component={Home}/>
      </Routes>
    </div>
  );
}

export default App;
