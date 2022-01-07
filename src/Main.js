import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {

  const dataInHere = "http://localhost:3001/JournalTable";
  const [journalList, setjournalList] = useState([]);


  useEffect(() => {
    Axios.get(dataInHere)
      .then((response) => {
        setjournalList(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="main">
      {journalList.map( (val) => (     
          <div className="blog-preview" key={val.id}>
            <Link className="blog-link" to={`/content/${val.id}`}>
                <h3>{val.title}</h3>
            </Link>
            <p>{val.date}</p>
          </div>
      )).sort( (val) => val.id).reverse()}
    </div>
  );
};

export default Main;
