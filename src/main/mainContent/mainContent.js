

let $ = document;
const AllProduct = [
    {
      id: 1,
      ProductName: "Ghormeh sabzi",
      Price: 33,
      imgSrc: "img/ghormeSabzi.jpg",
      about:
        "This Iranian food is very delicious Local meat and vegetables areused in this dishPrice: 33 $",
      count: 1,
    },
    {
      id: 2,
      ProductName: "kebab",
      Price: 44,
      imgSrc: "img/kabab.jpg",
      about:
        "This dish is very delicious. In this dish, minced meat is skewered The price is$40",
      count: 1,
    },
    {
      id: 3,
      ProductName: "Gheimeh",
      Price: 49,
      imgSrc: "img/gheyme.jpg",
      about:
        "It is a very delicious dish that has meat, cobs, and fried Zemini apples The price is The price is$49",
      count: 1,
    },
    {
      id: 4,
      ProductName: "Bamia",
      Price: 47,
      imgSrc: "img/bamiye.jpg",
      about:
        "There is meat in this okra stew and Iranians love this dish very much The price is$47",
      count: 1,
    },
    {
      id: 5,
      ProductName: "Fish",
      Price: 60,
      imgSrc: "img/mahi.jpg",
      about:
        "Fish is very popular in Iran and most Iranians include it in their diet The price is$60",
      count: 1,
    },
    {
      id: 6,
      ProductName: "Chicken",
      Price: 70,
      imgSrc: "img/morgh.jpg",
      about:
        "In Iran, peoples consumption of chicken is very high and they like it very much and cook it in their parties The price is$70 ",
      count: 1,
    },
    {
      id: 7,
      ProductName: "coco sabzi",
      Price: 30,
      imgSrc: "img/sabzococo.jpg",
      about:
        "This food is very useful for health and is very popular in Iran The price is $30",
      count: 1,
    },
    {
      id: 8,
      ProductName: "Aush reshteh",
      Price: 40,
      imgSrc: "img/ashReshte.jpg",
      about:
        "This dish is very popular in Iran and is eaten in cold weather The price is $40",
      count: 1,
    },
  ];

function MainContent(){
    return(
        <div className="MainContent">
            {
                AllProduct.forEach(Product => {
                    let contentBoxFoods = $.createElement("div");
                     contentBoxFoods.classList = "content-box-foods";
                        console.log(contentBoxFoods)
                })
            }    
        </div>
    )
}


export default MainContent