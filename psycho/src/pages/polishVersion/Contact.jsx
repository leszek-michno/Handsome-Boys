import "../../assets/styles/_Contact.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiFillYoutube,
} from "react-icons/ai";
import ContactForm from "../../components/ContactForm";
// import imghsb from '../../assets/images/hsb.webp'

const Contact = () => {
  return (

<div className="contact">
  <h1>Kontakt</h1>
 <div className="media">    
      <a href={"mailto:handsomeboys@propaway.pl"}>
        <AiOutlineMail />
      </a>
      <a
        href={
          "https://youtube.com/@handsome-boys-rockabilly?si=zQ2t10qOL_CdzZ8m"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillYoutube />
      </a>
        <a href={"https://www.facebook.com/profile.php?id=61562374262466"} target="_blank" rel="noopener noreferrer">
          <AiOutlineFacebook />
        </a>
        <a href={"https://www.instagram.com/handsomeboys_rockabilly/"} target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram />
        </a>
      </div>
      <ContactForm/>
      {/* <img src={imghsb} alt="photo" /> */}
    </div> 

  );

};
export default Contact;
