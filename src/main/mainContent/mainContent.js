import "./mainContent.css";

function MainContent(propsName , propsInformation) {
   return(
    <div className="MainContent">
          
          <div className ="ContentBoxFoods">
              <div className="BoxPicFoods"></div>
              <h3>{propsName.propsName}</h3>
              <p>{propsName.propsInformation}</p>
              <button>add</button>
          </div>
    </div>

   )
}

export default MainContent;
