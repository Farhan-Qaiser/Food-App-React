import PizzaImage from "../assets/pizza.jpg"
import MomosImage from "../assets/momo.jpg"







const ExploreFood = () => {
  return (<>

<div className="title">
        <h1>Explore Food</h1>
      </div>


    <div className="explore">
      <div>
        {/* <img src={}/> */}
        <p>Burger</p>
      </div>

      <div>
        <img src={MomosImage}/>
        <p>Momos</p>
      </div>

      <div>
        <img src={PizzaImage}/>
        <p>Pizza</p>
      </div>

    </div>
    </>
  )
}

export default ExploreFood
