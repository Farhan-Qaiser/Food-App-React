import PizzaImage from "../assets/pizza.jpg"
import MomosImage from "../assets/momo.jpg"
import LassangaImage from '../assets/lassanga.jpg'






const ExploreFood = () => {
  return (<>

<div className="title">
        <h1>Explore Foods</h1>
      </div>


    <div className="explore">
      <div>
        <img src={LassangaImage}/>
        <p>Lassanga</p>
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
    <h1 className="title-food-menu">Food Menu</h1>
    </>
  )
}

export default ExploreFood
