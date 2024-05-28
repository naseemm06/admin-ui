import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className="item">
            <img
              src="https://media.licdn.com/dms/image/D5603AQG1yFgaj_McQw/profile-displayphoto-shrink_400_400/0/1713620668235?e=1720656000&v=beta&t=CGwVvL8S7D3QkUEGjkMCTqKJokZtlrZn0Rf4xJLRR5I"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
