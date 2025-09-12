import { Parallax } from "react-parallax"; 
import Mainphoto from '../../assets/images/propaTwo.jpg';
import '../../assets/styles/_MainPage.scss';
import MainPageTexe from "../../components/MainPageTexe";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <div className="intro">
      <Helmet>
        <title>Handsome Boys</title>
        <meta
          name="description"
          content="Duet muzyczny z Krakowa grający w stylach rockabilly i psychobilly  (czasami z elementami bluesa)."
        />
      </Helmet>
    <Parallax className="image" bgImage={Mainphoto} strength={150} blur={0.5}>
      <header className="content">
        <h1>HANDSOME BOYS</h1>
      </header>
    </Parallax>
    <MainPageTexe/>
    </div>
  )
}

export default MainPage