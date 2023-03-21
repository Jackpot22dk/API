import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';


import Navbar from './layout/Navbar';
/* import Footer from './layout/Footer';
import Header from './layout/Header'; */
import Home from './pages/Home';
import Users from './pages/jsonplaceholder/Users';
import Species from './pages/jsonplaceholder/Species';
import Starships from './pages/jsonplaceholder/Starships';
import News from './pages/news/News';
import Nomatch from './pages/Nomatch';
import Games from './pages/rapidapi/Games';
import Facts from './pages/rapidapi/Facts';
import Weather from './pages/weatherAPI/Weather';
import Steam from './pages/steam/Steam';
import Weathermap from './pages/weatherAPI/Weathermap';
import Indkoebsliste from './pages/baseAPI/Indkoebsliste';
import IndkoeblisteCreate from './pages/baseAPI/IndkoeblisteCreate';
import IndkoeblisteAdmin from './pages/baseAPI/IndkoeblisteAdmin';
import IndkoeblisteEdit from './pages/baseAPI/IndkoeblisteEdit';
import Products from './pages/backendAPI/Products';
import ProductsAdmin from './pages/backendAPI/ProductsAdminCreate';
import ProductsAdminEdit from './pages/backendAPI/ProductsAdminEdit';
import ProductsAdminCreate from './pages/backendAPI/ProductsAdmin';
import Haveservice from './pages/haveservice/Haveservice';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />
        {/* <Header /> */}

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Users />} />
          <Route path="/species" element={<Species />} />
          <Route path="/starships" element={<Starships />} />
          <Route path='/news' element={<News/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/facts' element={<Facts/>}/>
          <Route path='/weather' element={<Weather/>}/>
          <Route path='/weathermap' element={<Weathermap/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/ProductsAdmin' element={<ProductsAdmin/>}/>
          <Route path='/ProductsAdminEdit/:_id' element={<ProductsAdminEdit/>}/>
          <Route path='/ProductsAdminCreate' element={<ProductsAdminCreate/>}/>
{/*           <Route path='/steam' element={<Steam/>}/> */}
          <Route path='/indkoebsliste' element={<Indkoebsliste/>}/>
          <Route path='/indkoeblisteCreate' element={<IndkoeblisteCreate/>}/>
          <Route path='/IndkoeblisteAdmin' element={<IndkoeblisteAdmin/>}/>
          <Route path='/IndkoeblisteEdit/:id' element={<IndkoeblisteEdit/>}/>
          <Route path='/Haveservice' element={<Haveservice/>}/>
          <Route path='*' element={<Nomatch/>}/>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
