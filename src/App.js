import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewJournal from "./AddNewJournal";
import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        

          <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/new-journal" element={<AddNewJournal />} />
          <Route path="/content/:id" element={<Content />} />
          <Route path="*" element={<NotFound />} />
          

          </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

