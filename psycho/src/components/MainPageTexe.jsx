import { NavLink } from "react-router-dom";
import "../assets/styles/_MainPageText.scss";

const MainPageTexe = () => {
  return (
    <div className="text">
      <p>
        Handsome Boys tworzą Piotr Chrzanowski (wokal i harmonijka) i Leszek
        Michno (gitara i bardzo mało wokalu).
      </p>
      <p>
        Przez ostatnie kilkanaście lat w różny sposób współpracowaliśmy
        muzycznie (przede wszystkim w nieistniejącym już zespole Propabillies).
        Jako Handsome Boys zaistnieliśmy w drugiej połowie 2023 roku. Na
        początku graliśmy tylko dla siebie, ale „wypchnięci” na scenę,
        postanowiliśmy tam zostać 😁.{" "}
      </p>
      <p>
        Gramy piosenki, które nam się podobają. Staramy się grać w stylach
        rockabilly i psychobilly z niewielkimi dodatkami bluesa. Próbki naszych
        starań można zobaczyć i posłuchać...{" "}
      </p>
      <div className="button">
        <NavLink to="Nasze_granie">...tutaj</NavLink>
      </div>
      <p>
        Wykonujemy piosenki takich tuzów muzyki rockabilly jak Eddie Cochran,
        Gene Vincent, Johnny Powers. Chętnie gramy także utwory neo-rockabillowe
        i psychobillowe m.in takich wykonawców jak Stray Cats, Restless,
        Dementent Are Go, Guana Batz, Reverend Horton Heat. Czasami sięgamy
        także po rzeczy z innej bajki np. kawałki Social Distortion czy też Sex
        Pistols.
      </p>
      <p>Zainterewsowanych do współpracy z nami zapraszamy do... </p>
      <div className="button">
        <NavLink to="Kontakt">...kontaktu z nami.</NavLink>
      </div>
    </div>
  );
};

export default MainPageTexe;
