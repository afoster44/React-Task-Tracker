import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Modal = ({ onClick }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("false");

  return (
    <div className="col-sm-4 d-flex align-items-center">
      <button
        class="btn btn-success btn-block"
        aria-hidden="true"
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Make a new Task please :P
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
                  <label for="exampleInputPassword1" class="form-label">
                    Enter the date and time below
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="date-time"
                    placeholder="Date & Time"
                    value={day}
                    onChange={(e) => setReminder(e.target.value)}
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
                  <label class="form-check-label" for="exampleCheck1">
                    Reminder
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
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
