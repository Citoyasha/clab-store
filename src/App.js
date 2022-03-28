import './App.css';
import Header from "./Components/Header/header.js";
import Carousel from "./Components/Carousel/carousel.js";
import Grid from "./Components/Grid/grid.js";
function App() {
  return (
    <div className="App">
      <Header className="column right"/>
      <Carousel className="column right"/>
      <Grid/>
    </div>
  );
}

export default App;
