import '../../assets/styles/Films.scss'


const Films = () => {
  return (
    <div className="films">
      <h1>Nasze granie</h1>
      
      <div>
        <h2>Koncert w Pubie Propaganda (Kraków 24.08.2024)</h2>
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/N3pglRH2Hxo?si=Gq8CpxeymnQLu33_"
          title="YouTube video player"
        ></iframe>
      </div>

      <div>
        <h2>Koncert w Cafe Schizofrenia (Kraków 21.06.2024)</h2>
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/b46Y0xwcqZU?si=N4-m0y6LJPgT3cZq"
          title="YouTube video player"
        ></iframe>
      </div>
      
      <div>
        <h2>Nagranie z próby</h2>
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/-36zVmDF9og?si=Q1AXallUuABVadKJ"
          title="YouTube video player"
        ></iframe>
      </div>
      
      <div>
        <h2>Koncert w Pubie Propaganda (Kraków 24.02.2024)</h2>
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/v3_LJrXk5CM?si=EsJCwAc6rvmyuhff"
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

export default Films;
