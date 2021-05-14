import PropTypes from "prop-types";
import Button from "./Button";
import Tasks from "./Tasks";
import Modal from "./Modal";

const Header = ({ title }) => {
  function onClick() {
    console.log("click");
  }
  return (
    <header>
      <div className="row">
        <div className="col-sm-7 offset-sm-1 mt-3">
          <h1>{title}</h1>
        </div>
        <Modal text="Add" onClick={onClick} />
      </div>
    </header>
  );
};

//below we can actually assign types to exactly what our data is supposed to be for even deeper error handling and insuring that we are getting the proper data types. You can also put .isRequired if the value has to be sent.

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//we can use defaultProps like so if not passing props to keep our code dynamic and DRY if doing this make sure to take in an object...if you are taking in a prop to the Header take in (props)
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
