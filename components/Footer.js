import Logotext from "./Logotext";

export default function () {
  return (
    <div className={`footer_bg`}>
      <div className="container">
        <div className="footer">
          <Logotext />
          <div className="footer_link">
            <a href="https://github.com/vasdeJ/mukemmelis">
              Github
            </a>
            <a href="https://github.com/vasdeJ/mukemmelis">
              Twitter
            </a>
            <a href="https://github.com/muminy/mukemmelis">
              Google play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
