import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import ArtistSearchPage from './pages/ArtistSearchPage/ArtistSearchPage';
import AlbumArtistPage from './pages/AlbumArtistPage/AlbumArtistPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path="/"  exact component={LoginPage} />
      <Route path="/search"  exact  component={ArtistSearchPage} />
      <Route path="/artist-album" exact component={AlbumArtistPage} />
    </Switch>
  </BrowserRouter>
      
    
  );
}

export default App;
