import "./App.scss";
import Photo from './assets/images/hsb.jpeg'

function App() {
  return (
    <div className="container">
      <p>Nawigation</p>
      <div>
        <img src={Photo} alt="Handsome Boys" />
      </div>
      <p>Footer</p>
    </div>
  );
}

export default App;
