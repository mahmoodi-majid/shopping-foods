import "./header.css";

function Header() {
  return (
    <div className="Header">
      <div className="menu">
        <h1>Foods</h1>
        <div className="top-menu">
          <ul>
            <li>Home</li>
            <li>best foods</li>
            <li>Dessert</li>
            <button>Sign Up</button>
          </ul>
          <div className="content-menu">
            <h1>Hi. This is Food.</h1>
            <p>Try the best foods with us</p>
            <button>Lorem ipsum dolor</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
