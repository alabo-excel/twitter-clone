import "./leftPane.css";
import {
  home,
  more,
  explore,
  lists,
  profile,
  messages,
  notifications,
  twitter,
  bookmarks,
} from "./icons";
import { NavLink } from "react-router-dom";

const LeftPane = () => {
  return (
    <div className="left-pane">
      <div className="container">
        <header>{twitter}</header>
        <nav>
          <NavLink exact to="/" activeClassName="selected">
            <span>{home} Home</span>
          </NavLink>
          <NavLink to="/explore" activeClassName="selected">
            <span>{explore} Explore</span>
          </NavLink>
          <NavLink to="/notifications" activeClassName="selected">
            <span>{notifications} Notifications</span>
          </NavLink>
          <NavLink to="/messages" activeClassName="selected">
            <span>{messages} Messages</span>
          </NavLink>
          <NavLink to="/bookmarks" activeClassName="selected">
            <span>{bookmarks} Bookmarks</span>
          </NavLink>
          <NavLink to="/lists" activeClassName="selected">
            <span>{lists} Lists</span>
          </NavLink>
          <NavLink to="/profile" activeClassName="selected">
            <span>{profile} Profile</span>
          </NavLink>
          <button className="more">
            <span>{more} More</span>
          </button>
        </nav>
        <button className="tweet">Tweet</button>
        <footer>
          <button className="account">
            <div className="photo">
              <img
                alt="Alabo Excel"
                draggable="true"
                src="https://pbs.twimg.com/profile_images/1312388028581675010/5WALAQw3_normal.jpg"
                class="css-9pa8cd"
              />
            </div>
            <div>
              <div className="name">Alabo Excel</div>
              <div className="username">@alaboexcel</div>
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LeftPane;
