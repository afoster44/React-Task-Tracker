import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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

  // add task
  function addTask(task) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete Task

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
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
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          style={{ minHeight: "80vh" }}
          className="col-sm-8 card border-dark"
        >
          <Header onAdd={addTask} />
          <AddTask onAdd={addTask} />
          <div className="col-sm-12">
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
        </div>
      </div>
    </div>
  );
}

export default App;
