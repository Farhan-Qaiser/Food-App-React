import Logo from '/public/logo.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={Logo} alt="Logo" />
        <h1>Tasty Eats</h1>
        <p>A taste you’ll remember.</p>
        <ul>
            <li><a>Home</a></li>
            <li><a>Gallery</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar
