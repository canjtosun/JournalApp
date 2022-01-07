import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Content = () => {
  const dataInHere = "http://localhost:3001/JournalTable";
  const navigate = useNavigate();
  const [journalList, setjournalList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(dataInHere)
      .then((response) => {
        setjournalList(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const deleteRequest = () => {
    Axios.delete(`${dataInHere}/${id}`).then( () => console.log('data deleted'));
    navigate('/')
  };

  return (
    <div className="home">
      {journalList.map((val) => {
        if (val.id === parseInt(id)) {
          return (
            <div className="blog-details" key={val.id}>
              <div className="content"> {val.content}</div>
              <button onClick={deleteRequest}>Delete</button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Content;
