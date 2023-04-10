import "./mainContent.css";

function MainContent(props) {
   
   return(
    <div className="MainContent">
          
          <div className ="ContentBoxFoods">
              <div className="BoxPicFoods">
               <img src={props.imgSrc} alt="pic" />
              </div>
              <h3>{props.propsName}</h3>
              <p>{props.propsInformation}</p>
              <button>add</button>
          </div>
    </div>

   )
}

export default MainContent;
