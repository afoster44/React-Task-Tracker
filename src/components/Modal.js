import { useState } from "react";

const Modal = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!text) {
      window.alert("Please add text before adding!");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  }

  return (
    <div className="col-sm-4 d-flex align-items-center">
      <button
        className="btn btn-success btn-block"
        aria-hidden="true"
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Make a new Task please :P
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Enter the title of the task below
                  </label>
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
                  <label className="form-label">
                    Enter the date and time below
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="date-time"
                    placeholder="Date & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                  />
                  <label className="form-check-label">Reminder</label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
