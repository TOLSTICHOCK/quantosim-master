import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <div className="icons">
        <a
          href="https://vk.com/quantumsim"
          rel="noopener noreferrer"
          target="_blank"
          className="vk-icon"
        >
          {" "}
        </a>
        <a
          href="https://rff.tsu.ru/"
          rel="noopener noreferrer"
          target="_blank"
          className="website-icon"
        >
          {" "}
        </a>
        <a
          href="mailto:decanat_rff@mail.tsu.ru"
          rel="noopener noreferrer"
          target="_blank"
          className="mail-icon"
        >
          {" "}
        </a>
      </div>
      <a href="/home" className="home-icon">
        {" "}
      </a>

      <a
        href="https://www.tsu.ru/"
        className="tsu-logo"
        rel="noopener noreferrer"
        target="_blank"
      >
        {" "}
      </a>
    </div>
  );
};

export default Header;
