const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="col-12 mt-2">
          <h3 key={task.id}>{task.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
