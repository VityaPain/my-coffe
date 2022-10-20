
import Title from "../title/title"
import CardCoffe from "../card-coffe/card-coffe"

import './our-best.scss'
const OurBest = () => {

    return(
        <div className="bests">
            <div className="shadow">
                <Title
                    text="Our Best"/>
                <div className="bests__container">
                    <CardCoffe 
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG"
                        src="./img/coffe/1.png"
                        label="solimo"
                        name="Solimo Coffee Beans 2 kg"
                        price="10.73$"/>
                    <CardCoffe 
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG"
                        src="./img/coffe/2.png"
                        label="presto"
                        name="Presto Coffee Beans 1 kg"
                        price="15.99$"/>
                    <CardCoffe 
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG"
                        src="./img/coffe/3.png"
                        label="aromisto"
                        name="AROMISTICO Coffee 1 kg"
                        price="6.99$"/>
                </div>
            </div>
            {/* <Title
                text="Our Best"/>
            <div className="bests__container">
                <CardCoffe 
                    // src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG"
                    src="./img/coffe/1.png"
                    label="solimo"
                    name="Solimo Coffee Beans 2 kg"
                    price="10.73$"/>
                <CardCoffe 
                    // src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG"
                    src="./img/coffe/2.png"
                    label="presto"
                    name="Presto Coffee Beans 1 kg"
                    price="15.99$"/>
                <CardCoffe 
                    // src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG"
                    src="./img/coffe/3.png"
                    label="aromisto"
                    name="AROMISTICO Coffee 1 kg"
                    price="6.99$"/>
            </div> */}
        </div>
    )
}

export default OurBest