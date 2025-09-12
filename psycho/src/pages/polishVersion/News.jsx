import "../../assets/styles/_News.scss";
import { NewsArray } from "../../assets/data/NewsArray";

const News = () => {
  return (
    <div className="news">
      <h1>Koncerty</h1>
      <div className="new">
        {NewsArray.map((item) => (
          <div key={item.id}>
            <h2>{item.data}</h2>
            <h2>{item.title}</h2>
            <img src={item.img} alt="poster" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
