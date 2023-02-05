import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import PostPage from "./pages/postPage/PostPage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Home />}/>
        <Route path="/register" element={currentUser ? <Home /> : <Register/>}/>
        <Route path="/login" element={currentUser ? <Home /> : <Login />}/>
        <Route path="/post/:id" element={<PostPage />}/>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}/>
        {/* <Route path="./logout" element={<Register />}/>s */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
