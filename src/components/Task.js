import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`row ${task.reminder ? "bg-info" : "bg-light"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="col-sm-8">
        <h3>{task.text}</h3>
      </div>
      <div className="col-sm-4 d-flex justify-content-end mt-2">
        <FaTimes onClick={() => onDelete(task.id)} className="text-danger" />
      </div>
      <div className="col-12">
        <p>{task.day}</p>
      </div>
    </div>
  );
};

export default Task;
