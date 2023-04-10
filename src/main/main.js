import MainTop from "./mainTop/mainTop"
import MainContent from "./mainContent/mainContent"
import './main.css'

function Main(){
    return(
        <div className="mine">
            <MainTop></MainTop>
            <div className="mineBox"> 
            <MainContent propsName ="Ghormeh sabzi" propsInformation="This Iranian food is very delicious Local meat and vegetables areused in this dishPrice: 33 $" imgSrc="ghormeSabzi.jpg"></MainContent>
            <MainContent propsName ="kebab" propsInformation="This dish is very delicious. In this dish, minced meat is skewered The price is$40" imgSrc="kabab.jpg" ></MainContent>
            <MainContent propsName ="Gheimeh" propsInformation="It is a very delicious dish that has meat, cobs, and fried Zemini apples The price is The price is$49" imgSrc="gheyme.jpg"></MainContent>
            <MainContent propsName ="Bamia" propsInformation="There is meat in this okra stew and Iranians love this dish very much The price is$47" imgSrc="bamiye.jpg"></MainContent>
            <MainContent propsName ="Fish" propsInformation="Fish is very popular in Iran and most Iranians include it in their diet The price is$60" imgSrc="mahi.jpg"></MainContent>
            <MainContent propsName ="Chicken" propsInformation="In Iran, peoples consumption of chicken is very high and they like it very much and cook it in their parties The price is$70" imgSrc="morgh.jpg"></MainContent>
            <MainContent propsName ="coco sabzi" propsInformation="This food is very useful for health and is very popular in Iran The price is $30" imgSrc="coco.jpg"></MainContent>
            <MainContent propsName ="Aush reshteh" propsInformation="This dish is very popular in Iran and is eaten in cold weather The price is $40" imgSrc="ashReshte.jpg"></MainContent>
            </div>
        </div>
    )
}
export default Main