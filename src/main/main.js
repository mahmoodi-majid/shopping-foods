import MainTop from "./mainTop/mainTop"
import MainContent from "./mainContent/mainContent"
import './main.css'

function Main(){
    const AllProduct = [
        {
          id: 1,
          ProductName: "Ghormeh sabzi",
          Price: 33,
          imgSrc: "ghormeSabzi.jpg",
          about:
            "This Iranian food is very delicious Local meat and vegetables areused in this dishPrice: 33 $",
          count: 1,
        },
        {
          id: 2,
          ProductName: "kebab",
          Price: 44,
          imgSrc: "kabab.jpg",
          about:
            "This dish is very delicious. In this dish, minced meat is skewered The price is$40",
          count: 1,
        },
        {
          id: 3,
          ProductName: "Gheimeh",
          Price: 49,
          imgSrc: "gheyme.jpg",
          about:
            "It is a very delicious dish that has meat, cobs, and fried Zemini apples The price is The price is$49",
          count: 1,
        },
        {
          id: 4,
          ProductName: "Bamia",
          Price: 47,
          imgSrc: "bamiye.jpg",
          about:
            "There is meat in this okra stew and Iranians love this dish very much The price is$47",
          count: 1,
        },
        {
          id: 5,
          ProductName: "Fish",
          Price: 60,
          imgSrc: "mahi.jpg",
          about:
            "Fish is very popular in Iran and most Iranians include it in their diet The price is$60",
          count: 1,
        },
        {
          id: 6,
          ProductName: "Chicken",
          Price: 70,
          imgSrc: "morgh.jpg",
          about:
            "In Iran, peoples consumption of chicken is very high and they like it very much and cook it in their parties The price is$70 ",
          count: 1,
        },
        {
          id: 7,
          ProductName: "coco sabzi",
          Price: 30,
          imgSrc: "coco.jpg",
          about:
            "This food is very useful for health and is very popular in Iran The price is $30",
          count: 1,
        },
        {
          id: 8,
          ProductName: "Aush reshteh",
          Price: 40,
          imgSrc: "ashReshte.jpg",
          about:
            "This dish is very popular in Iran and is eaten in cold weather The price is $40",
          count: 1,
        },
      ];
    return(
        <div className="mine">
            <MainTop></MainTop>
            <div className="mineBox"> 
            <MainContent {...AllProduct[0]}></MainContent>
            <MainContent {...AllProduct[1]}></MainContent>
            <MainContent {...AllProduct[2]}></MainContent>
            <MainContent {...AllProduct[3]}></MainContent>
            <MainContent {...AllProduct[4]}></MainContent>
            <MainContent {...AllProduct[5]}></MainContent>
            <MainContent {...AllProduct[6]}></MainContent>
            <MainContent {...AllProduct[7]}></MainContent>
            </div>
        </div>
    )
}
export default Main