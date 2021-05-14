import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`row `} onDoubleClick={() => onToggle(task.id)}>
      <div
        className="col-sm-12"
        style={{
          boxShadow: `${
            task.reminder ? "5px 5px 0px 5px red" : "10px 10px 0px 10px green"
          }`,
        }}
      >
        <div className="row">
          <div className="col-sm-6">
            <h3>{task.text}</h3>
          </div>
          <div className="col-sm-6 d-flex justify-content-end  mt-2">
            <FaTimes
              onClick={() => onDelete(task.id)}
              className="text-danger"
            />
          </div>
        </div>
        <div className="col-12">
          <p>{task.day}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
