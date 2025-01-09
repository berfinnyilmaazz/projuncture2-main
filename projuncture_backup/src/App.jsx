import Body from "./components/Body";
import Footer from "./components/Footer";
import Kanban from "./components/Kanban";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import PublishProject from "./components/PublishProject";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Task from "./components/Task";

export default function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
       <Route path="/task" element={<Task />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/publish-project" element={<PublishProject />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
    
  )
}
