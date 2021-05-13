import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="col-12 mt-3">
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
