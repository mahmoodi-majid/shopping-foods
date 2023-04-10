import "./mainContent.css";

function MainContent({propsName,propsInformation,imgSrc}) {
   
   return(
    <div className="MainContent">
          
          <div className ="ContentBoxFoods">
              <div className="BoxPicFoods">
               <img src={imgSrc} alt="pic" />
              </div>
              <h3>{propsName}</h3>
              <p>{propsInformation}</p>
              <button>add</button>
          </div>
    </div>

   )
}

export default MainContent;
