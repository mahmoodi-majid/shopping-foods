import "./mainContent.css";

function MainContent(props) {
  const {product} = props;
  console.log(props.product)
  return(
    <div className="MainContent">
      <div className="ContentBoxFoods">
        <div className="BoxPicFoods">
          <img src={product.imgSrc} alt="pic" />
        </div>
        <h3>{product.ProductName}</h3>
        <p>{product.about}</p>
        <button>add</button>
      </div>
    </div>
  )
}

export default MainContent;
