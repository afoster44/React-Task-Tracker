import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointement",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Bank Appointement",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Programming Interview",
      day: "Feb 7th at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete Task

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function addTask(task) {
    setTasks(tasks.map((task) => [...tasks, task]));
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div
          style={{ minHeight: "80vh" }}
          className="col-sm-8 offset-2 mt-5 card border-dark"
        >
          <Header />
          <div className="col-12">
            {tasks.length > 0 ? (
              <Tasks
                onToggle={toggleReminder}
                tasks={tasks}
                onDelete={deleteTask}
              />
            ) : (
              "No tasks available"
            )}
          </div>
          <div className="col-12">
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
