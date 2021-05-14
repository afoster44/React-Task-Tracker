import { useState } from "react";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("false");
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Enter the title of the task below
        </label>
        <input
          type="text"
          class="form-control"
          id="text"
          placeholder="Title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label>Enter the date and time below</label>
        <input
          type="text"
          class="form-control"
          id="day"
          placeholder="Date & Time"
          value={day}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          value={reminder}
          onChange={(e) => setText(e.currentTarget.checked)}
        />
        <label class="form-check-label">Reminder</label>
      </div>
      <button type="submit" class="btn btn-success btn-block">
        Submit
      </button>
    </form>
  );
};

export default AddTask;