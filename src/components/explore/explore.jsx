import "./explore.css";
import { more, setting } from "./icons";
import { Helmet } from "react-helmet";

const Explore = () => {
  return (
    <div className="explore">
      <Helmet>
        <title>Explore/Twitter</title>
      </Helmet>
      <div className="form">
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="trends">
        <div className="card">
          <div>
            <p className="trends-for-you">Trends for you </p>
          </div>
          {setting}
        </div>
        <div className="card">
          <div>
            <span className="sub">Trending in Netherlands</span>
            <p className="title">For Lagos</p>
            <span className="sub">6,788 Tweets</span>
          </div>
          {more}
        </div>
        <div className="card">
          <div>
            <span className="sub">Trending in Netherlands</span>
            <p className="title">For Lagos</p>
            <span className="sub">6,788 Tweets</span>
          </div>
          {more}
        </div>
        <div className="card">
          <div>
            <span className="sub">Trending in Netherlands</span>
            <p className="title">For Lagos</p>
            <span className="sub">6,788 Tweets</span>
          </div>
          {more}
        </div>
        <div className="card">
          <div>
            <span className="sub">Trending in Netherlands</span>
            <p className="title">For Lagos</p>
            <span className="sub">6,788 Tweets</span>
          </div>
          {more}
        </div>
        <div className="card">
          <div>
            <span className="sub">Trending in Netherlands</span>
            <p className="title">For Lagos</p>
            <span className="sub">6,788 Tweets</span>
          </div>
          {more}
        </div>
        <div className="more">
          <p>Show more</p>
        </div>
      </div>
    </div>
  );
};
export default Explore;
