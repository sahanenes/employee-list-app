const Header = ({ indexOfFirstUser, indexOfLastUser }) => {
  return (
    <div>
      <h3>Employee List</h3>
      <h4>
        ( Employees {indexOfFirstUser + 1} to {indexOfLastUser})
      </h4>
    </div>
  );
};

export default Header;
