import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const AddNewJournal = () => {
  const dataInHere = "http://localhost:3001/JournalTable";
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [journalList, setjournalList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(dataInHere)
      .then((response) => {
        setjournalList(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addJournal = () => {
    Axios.post(dataInHere, { title: title, date: date, content: content }).then(
        setjournalList( [...journalList, {title: title, date:date, content:content},])
    ).then(
        navigate('/')
    )
  };

  return (
    <div className="new-journal">
      <h1>Add New Journal</h1>
      <form>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(x) => setTitle(x.target.value)}
        />
        <label>Date:</label>
        <input
          type="date"
          placeholder="mm/dd/yy"
          required
          value={date}
          onChange={(x) => setDate(x.target.value)}
        />
        <label>Content:</label>
        <textarea
          required
          value={content}
          onChange={(x) => setContent(x.target.value)}
        />
        <button onClick={addJournal}>Add</button>
      </form>
    </div>
  );
};

export default AddNewJournal;
