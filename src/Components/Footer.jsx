import { FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";





const Footer = () => {

  const currYear = new Date().getFullYear()


  return (
    <div className="footer">
      <div className="icon">
      <a><FaFacebook size={30}/></a>
      <a><BsInstagram size={30}/></a>
      <a><FaXTwitter size={30}/></a>
      </div>
      <h5> © Copyright  {currYear}.All rights reserved </h5>
    </div>
  )
}

export default Footer