import Header from "./components/Header";
import Tasks from "./components/Tasks";
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
      id: 1,
      text: "Programming Interview",
      day: "Feb 7th at 2:30pm",
      reminder: false,
    },
  ]);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="col-sm-8 offset-2 mt-5 card border-dark">
          <Header />
          <div className="col-12">
            <div className="row">
              <Tasks tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
