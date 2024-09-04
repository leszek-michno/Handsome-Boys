import "../assets/styles/Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <a href={"mailto:handsomeboys@propaway.pl"}>
            handsomeboys@propaway.pl
          </a>
        </div>

        <div className="social-media">
          <a
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
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
          </a>{" "}
        </div>

        <div>copyright@2024lem-son</div>
      </div>
    </>
  );
};

export default Footer;
