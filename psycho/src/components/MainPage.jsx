import { Parallax } from "react-parallax"; 
import Mainphoto from '../assets/images/boys.webp'
import '../assets/styles/MainPage.scss'

const MainPage = () => {
  return (
    <div className="intro">
    <Parallax className="image" bgImage={Mainphoto} strength={250} blur={1}>
      <header className="content">
        <h1>HANDSOME</h1>
        <h1>BOYS</h1>
      </header>
    </Parallax>
    </div>
  )
}

export default MainPage