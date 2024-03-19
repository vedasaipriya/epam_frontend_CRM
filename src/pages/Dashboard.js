import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS file
import Layout from './../components/Layout/Layout';

function Dashboard() {
    const [projects, setProjects] = useState([
        { id: 1, title: "Project A", status: "pending" },
        { id: 2, title: "Project B", status: "ongoing" },
        { id: 3, title: "Project C", status: "completed" }
    ]);

    const [meetings, setMeetings] = useState([
        { id: 1, title: "Meeting X", time: "10:00 AM" },
        { id: 2, title: "Meeting Y", time: "2:00 PM" },
        { id: 3, title: "Meeting Z", time: "4:00 PM" }
    ]);

    const [newProjectTitle, setNewProjectTitle] = useState('');
    const [newProjectStatus, setNewProjectStatus] = useState('pending');

    const [newMeetingTitle, setNewMeetingTitle] = useState('');
    const [newMeetingTime, setNewMeetingTime] = useState('');

    const [editProjectId, setEditProjectId] = useState(null);
    const [editMeetingId, setEditMeetingId] = useState(null);

    const addProject = () => {
        if (newProjectTitle.trim() !== '') {
            setProjects([...projects, { id: projects.length + 1, title: newProjectTitle, status: newProjectStatus }]);
            setNewProjectTitle('');
            setNewProjectStatus('pending');
        }
    };

    const addMeeting = () => {
        if (newMeetingTitle.trim() !== '' && newMeetingTime.trim() !== '') {
            setMeetings([...meetings, { id: meetings.length + 1, title: newMeetingTitle, time: newMeetingTime }]);
            setNewMeetingTitle('');
            setNewMeetingTime('');
        }
    };

    const deleteProject = (id) => {
        const updatedProjects = projects.filter(project => project.id !== id);
        setProjects(updatedProjects);
    };

    const deleteMeeting = (id) => {
        const updatedMeetings = meetings.filter(meeting => meeting.id !== id);
        setMeetings(updatedMeetings);
    };

    const editProject = (id) => {
        setEditProjectId(id);
        const projectToEdit = projects.find(project => project.id === id);
        setNewProjectTitle(projectToEdit.title);
        setNewProjectStatus(projectToEdit.status);
    };

    const editMeeting = (id) => {
        setEditMeetingId(id);
        const meetingToEdit = meetings.find(meeting => meeting.id === id);
        setNewMeetingTitle(meetingToEdit.title);
        setNewMeetingTime(meetingToEdit.time);
    };

    const updateProject = () => {
        const updatedProjects = projects.map(project => {
            if (project.id === editProjectId) {
                return { ...project, title: newProjectTitle, status: newProjectStatus };
            }
            return project;
        });
        setProjects(updatedProjects);
        setEditProjectId(null);
        setNewProjectTitle('');
        setNewProjectStatus('pending');
    };

    const updateMeeting = () => {
        const updatedMeetings = meetings.map(meeting => {
            if (meeting.id === editMeetingId) {
                return { ...meeting, title: newMeetingTitle, time: newMeetingTime };
            }
            return meeting;
        });
        setMeetings(updatedMeetings);
        setEditMeetingId(null);
        setNewMeetingTitle('');
        setNewMeetingTime('');
    };

    const sortedProjects = projects.sort((a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
    });


return (
        <Layout>
            <div className="dashboard">
                <div className="projects-section">
                    <h2>Projects</h2>
                    <div className="projects">
                        <div className="add-project">
                            <h3>{editProjectId ? 'Edit Project' : 'Add New Project'}</h3>
                            <input
                                type="text"
                                placeholder="Enter project title"
                                value={newProjectTitle}
                                onChange={(e) => setNewProjectTitle(e.target.value)}
                            />
                            <select
                                value={newProjectStatus}
                                onChange={(e) => setNewProjectStatus(e.target.value)}
                            >
                                <option value="pending">Pending</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="completed">Completed</option>
                            </select>
                            {editProjectId ?
                                <button onClick={updateProject}>Update Project</button> :
                                <button onClick={addProject}>Add Project</button>
                            }
                        </div>
                        <div className="project-table">
                            {renderTable(sortedProjects, 'projects', deleteProject, editProject)}
                        </div>
                    </div>
                </div>
                <div className="meetings-section">
                    <h2>Meetings</h2>
                    <div className="meetings">
                        <div className="add-meeting">
                            <h3>{editMeetingId ? 'Edit Meeting' : 'Add New Meeting'}</h3>
                            <input
                                type="text"
                                placeholder="Enter meeting title"
                                value={newMeetingTitle}
                                onChange={(e) => setNewMeetingTitle(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Enter meeting time"
                                value={newMeetingTime}
                                onChange={(e) => setNewMeetingTime(e.target.value)}
                            />
                            {editMeetingId ?
                                <button onClick={updateMeeting}>Update Meeting</button> :
                                <button onClick={addMeeting}>Add Meeting</button>
                            }
                        </div>
                        <div className="meeting-table">
                            {renderTable(meetings, 'meetings', deleteMeeting, editMeeting)}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function renderTable(data, type, deleteItem, editItem) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{type === 'projects' ? 'Project Title' : 'Meeting Title'}</th>
                    {type === 'projects' && <th>Status</th>}
                    {type === 'meetings' && <th>Time</th>}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        {type === 'projects' && <td>{item.status}</td>}
                        {type === 'meetings' && <td>{item.time}</td>}
                        <td>
                            <button onClick={() => editItem(item.id)}>Edit</button>
                            <span style={{ margin: '0 5px' }}></span> {/* Space between buttons */}
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Dashboard;
