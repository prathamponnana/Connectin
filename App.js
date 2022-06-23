import "./App.css";
import SigninPage from "./pages/SigninPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinNow from "./pages/JoinNow";
import ProfileForm from "./pages/ProfileForm";
import Feed from "./pages/Feed";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/onboarding" element={<JoinNow />} />
          <Route path="/profileform" element={<ProfileForm />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/network" element={<Network/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
