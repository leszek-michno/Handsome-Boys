import { Parallax } from "react-parallax"; 
import Mainphoto from '../../assets/images/boys.webp'
import '../../assets/styles/MainPage.scss';
import MainPageTexe from "../../components/MainPageTexe";

const MainPage = () => {
  return (
    <div className="intro">
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