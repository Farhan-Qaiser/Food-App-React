import Enchiladas from '../assets/enchiladas.jpg'
import Lassanga from '../assets/lassanga.jpg'
import PizzaMargherita from '../assets/pizzaMargherita.jpg'
import Pozole from '../assets/pozole.jpg'
import Spaghetti from '../assets/spaghettiCarbonara.jpg'
import Tacos from '../assets/tacos.jpg'

const FoodMenu = () => {  


  const menuItems = [
    {
      id: 1,
      image: Enchiladas ,
      name: 'Enchiladas',
      ingredients: 'Beef, Lettuce, Tomato, Cheese',
      price: 10.99,
    },
    {
      id: 2,
      image: Lassanga,
      name: 'Lassanga',
      ingredients: 'Tomato Sauce, Mozzarella, Pepperoni',
      price: 14.99,
    },
    {
      id: 3,
      image: PizzaMargherita,
      name: 'Pizza Margherita',
      ingredients: 'Mixed Greens, Cherry Tomatoes, Cucumber',
      price: 8.99,
    },
    {
      id: 4,
      image: Pozole ,
      name: 'Pozole',
      ingredients: 'Rice, Salmon, Avocado',
      price: 12.99,
    },
    {
      id: 5,
      image: Spaghetti,
      name: 'Spaghetti',
      ingredients: 'Beef, Lettuce, Tomato, Cheese',
      price: 11.99,
    },
    {
      id: 6,
      image: Tacos ,
      name: 'Tacos',
      ingredients: 'Grilled Steak, Garlic Butter',
      price: 19.99,
    },
  ];





  
  return (
    <div className="food-menu">
      {menuItems.map((menuItem) => (
        <div key={menuItem.id} className="food-card">
          <img src={menuItem.image} alt={menuItem.name} />
          <h2>{menuItem.name}</h2>
          <p>Ingredients: {menuItem.ingredients}</p>
          <p>Price: ${menuItem.price}</p>
          <button>Order Now</button>
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;