import '../../assets/styles/_Films.scss'


const Films = () => {
  return (
    <div className="films">
      <h1>Nasze granie</h1>
      
    <div className='clip'>

    <div>
        <h2>Zaucha Fest</h2>
        <h3> (Kraków 06.09.2025)</h3>
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/nnaGF6igkDA?si=IACRZVlaeVIM6RWO" 
          title="YouTube video player"
        ></iframe>
      </div> 


    <div>
        <h2>Nagranie z próby</h2>
        <h3> (Kraków 01.05.2025)</h3>
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/BznerAs9Jok?si=bz_Cqo0u4A2KpVn9" 
          title="YouTube video player"
        ></iframe>
      </div>   

    <div>
        <h2>Koncert w Oliwa Pub</h2>
        <h3> (Kraków 06.12.2024)</h3>
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/MsyzHgrbP5w?si=dL_REm1i4LF9Lxlb"
          title="YouTube video player"
        ></iframe>
      </div>

      <div>
        <h2>Koncert w Pubie Propaganda</h2>
        <h3> (Kraków 24.08.2024)</h3>
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/N3pglRH2Hxo?si=Gq8CpxeymnQLu33_"
          title="YouTube video player"
        ></iframe>
      </div>

      <div>
        <h2>Koncert w Cafe Schizofrenia </h2>
        <h3>(Kraków 21.06.2024)</h3>
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/b46Y0xwcqZU?si=N4-m0y6LJPgT3cZq"
          title="YouTube video player"
        ></iframe>
      </div>
      
      <div>
        <h2>Nagranie z próby</h2>
        <h3>(Kraków 24)</h3>
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/-36zVmDF9og?si=Q1AXallUuABVadKJ"
          title="YouTube video player"
        ></iframe>
      </div>
      
      {/* <div>
        <h2>Koncert w Pubie Propaganda </h2>
        <h3>(Kraków 24.02.2024)</h3>
        <iframe
          width="500"
          height="350"
          src="https://www.youtube.com/embed/v3_LJrXk5CM?si=EsJCwAc6rvmyuhff"
          title="YouTube video player"
        ></iframe>
      </div> */}
      </div>
    </div>
  );
};

export default Films;
