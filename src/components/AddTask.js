import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!text) {
      window.alert("Input text please");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  }
  return (
    <form className="col-sm-12" onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Enter the title of the task below</label>
        <input
          type="text"
          className="form-control"
          id="text"
          placeholder="Title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Enter the date and time below</label>
        <input
          type="text"
          className="form-control"
          id="day"
          placeholder="Date & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="mb-3 ml-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={reminder}
          id="exampleCheck1"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label className="form-check-label ml-3">Reminder?</label>
      </div>
      <button type="submit" className="btn btn-success btn-block">
        Submit
      </button>
    </form>
  );
};

export default AddTask;
