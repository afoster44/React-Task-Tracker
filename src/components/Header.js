const Header = ({ title }) => {
  return (
    <header>
      <div className="col-12">
        <h1>{title}</h1>
      </div>
    </header>
  );
};

//we can use defaultProps like so if not passing props to keep our code dynamic and DRY if doing this make sure to take in an object...if you are taking in a prop to the Header take in (props)
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
