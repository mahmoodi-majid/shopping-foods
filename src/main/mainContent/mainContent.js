import "./mainContent.css";

function MainContent({ id, ProductName, Price, imgSrc, about, cound }) {
  return (
    <div className="MainContent">
      <div className="ContentBoxFoods">
        <div className="BoxPicFoods">
          <img src={imgSrc} alt="pic" />
        </div>
        <h3>{ProductName}</h3>
        <p>{about}</p>
        <button>add</button>
      </div>
    </div>
  );
}

export default MainContent;
