import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import PostPage from "./pages/postPage/PostPage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useLocation } from "react-router";
import { useContext } from "react";
import { Context } from "./context/Context";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/about/About";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Home />}/>
        <Route path="/register" element={user ? <Home /> : <Register/>}/>
        <Route path="/login" element={user ? <Home /> : <Login/>}/>
        <Route path="/post/:id" element={<PostPage />}/>
        <Route path="/write" element={user ? <Write /> : <Login/>}/>
        <Route path="/settings" element={user ? <Settings /> : <Login/>}/>
        <Route path="./logout" element={<Register />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
