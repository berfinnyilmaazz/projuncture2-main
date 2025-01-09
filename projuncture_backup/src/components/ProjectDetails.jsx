import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectDetails.css";


export default function ProjectDetails () {

    const projects = [
        {
          name: "App Development",
          company: "Dropbox, Inc.",
          budget: "$2.500.000",
          startDate: "17 Jun, 2020",
          endDate: "04 Jul, 2020",
          description:
            "You need to develop an application on something like React Native, so that it is for Android and IOS...",
          checklist: [
            { task: "Create wireframes", done: true },
            { task: "UI/UX design development", done: true },
            { task: "Layout design", done: false },
          ],
          members: ["Jacob Hawkins", "Regina Cooper", "Jane Wilson", "Ronald Robertson"],
        },
        {
          name: "Website Redesign",
          company: "GitLab Inc.",
          budget: "$1.200.000",
          startDate: "01 Jan, 2021",
          endDate: "20 Jan, 2021",
          description: "Complete redesign of the website with a focus on modern design principles...",
          checklist: [
            { task: "Gather requirements", done: true },
            { task: "Design mockups", done: false },
            { task: "Develop frontend", done: false },
          ],
          members: ["Alice Brown", "Tom Hardy", "Sara White"],
        },
      ];
    
      // State: Şu anki seçilen proje
      const [currentProject, setCurrentProject] = useState(projects[0]);
    
      // Proje değiştirme fonksiyonu
      const loadProject = (project) => {
        setCurrentProject(project);
      };

      const toggleTask = (index) => {
        const updatedChecklist = [...currentProject.checklist];
        updatedChecklist[index].done = !updatedChecklist[index].done;
        setCurrentProject({ ...currentProject, checklist: updatedChecklist });
      };
    
      const progressPercentage = Math.round(
        (currentProject.checklist.filter((task) => task.done).length /
          currentProject.checklist.length) *
          100
      );

      const navigate = useNavigate();

    return(
        <div className="project-details">
        <div className="app-container">
      {/* Sidebar */}
            <div className="sidebar">
                <h3>Projeler</h3>
                <ul>
                    {projects.map((project, index) => (
                        <li
                        key={index}
                        className="project-item"
                        onClick={() => loadProject(project)}
                        style={{
                            cursor: "pointer",
                            backgroundColor: currentProject.name === project.name ? "#7AB2D3" : "",
                        }}
                        >
                        <h4>{project.name}</h4>
                        <p>{project.company}</p>
                        <span>{project.budget}</span>
                        </li>
                    ))}
                </ul>
            </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>{currentProject.name}</h2>
        <p>{currentProject.company}</p>
        <div className="details">
          <p>
            <span className="material-icons">payments</span><strong>Budget:</strong> {currentProject.budget}
          </p>
          <p>
            <span className="material-icons">calendar_month</span><strong>Start Date:</strong> {currentProject.startDate}
          </p>
          <p>
          <span className="material-icons">event_available</span><strong>End Date:</strong> {currentProject.endDate}
          </p>
        </div>
        <p>{currentProject.description}</p>
        <div className="checklist">
            <h3>
              Checklist ({progressPercentage}%)
            </h3>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <ul>
              {currentProject.checklist.map((item, index) => (
                <li key={index} className={item.done ? "done" : ""}>
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => toggleTask(index)}
                  />
                  {item.task}
                </li>
              ))}
            </ul>
        </div>

        <div className="kanban-button">
                <button onClick={() => navigate('/kanban')} className="btn">Kanban Board'a git</button>
            </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <h3>Status</h3>
        <select>
          <option>Started</option>
          <option>On Hold</option>
          <option>Completed</option>
        </select>
        <h3>Members</h3>
        <ul>
          {currentProject.members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
    
        
        
        </div>
    );
}