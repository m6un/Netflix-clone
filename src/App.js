import Navbar from "./Components/NavBar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { comedyMovies, documentaries, horror, originals } from "./urls"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title = {"Originals"} url = {originals} />
      <RowPost title = {"Horror"} url = {horror} isSmall/>
      <RowPost title = {"Comedy"} url = {comedyMovies} isSmall/>
      <RowPost title = {"Documentary"} url = {documentaries} isSmall/>
    </div>
  );
}

export default App;
