import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <div className="col-sm-4 text-right d-flex align-items-center">
      <button onClick={onClick} className="btn btn-success btn-block">
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "Add",
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
