import "./home.css";
import { play, comment, retweet, heart, share, star } from "../bookmarks/icons";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home/Twitter</title>
      </Helmet>
      <div className="card">
        <div>
          <h2>Home</h2>
        </div>
        <div>
            {star}
        </div>
      </div>
      <div className="card">
        <div className="pics">
          <img
            alt="Alabo Excel"
            draggable="true"
            src="https://pbs.twimg.com/profile_images/1312388028581675010/5WALAQw3_normal.jpg"
            class="css-9pa8cd"
          />
        </div>{" "}
        <div>
          <div>
            <span className="title">Alabo Excel</span>
            <span className="username">@alaboExcel</span>
            <span className="username">2m</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
              <br /> Quasi doloremque odio ea cupiditate repellendus atque iusto
              voluptatibus sint dolore quas laudantium facilis eveniet, culpa
              facere, dolores perspiciatis ex, ipsa ipsam at? <br />
              <br /> Voluptatibus temporibus ducimus esse nobis itaque quis
              harum, id corrupti veritatis quae. Amet ipsum id fugiat ratione
              reiciendis quod?
            </p>
            <div className="icons">
              <p>{play}</p>
              <p className="count">
                {comment} <span>5</span>
              </p>
              <p className="count">
                {retweet} <span>9</span>
              </p>
              <p className="count">
                {heart} <span>10</span>{" "}
              </p>
              {share}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
