import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div
          className="col-12 mt-3 shadow mb-3 mt-3 bg-light"
          style={{
            minHeight: "100%",
            overflow: "auto",
          }}
        >
          <Task
            onToggle={onToggle}
            key={task.id}
            task={task}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
