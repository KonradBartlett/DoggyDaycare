import { useEffect } from 'react';

import './app.scss';

import { Background } from './components/background';
import { Footer } from './components/footer';
import { Services } from './pages/services';

import {ReactComponent as Logo} from './assets/logo.svg';
import { Menu } from './components/menu';
import { Home } from './pages/home';
import { Team } from './pages/team';
import { Location } from './pages/location';
import { Hours } from './pages/hours';
import { Contact } from './pages/contact';
import { Gallery } from './pages/gallery';

function App() {

  useEffect(() => {
  },[])

  return (
      <main style={{'minHeight': '100vh'}}>
          <nav className="navbar">
              <div className="navbar-nav">
          <Menu/>
                <h2 className="large">Doggy Daycare</h2>
                <h2 className="small">DD</h2>
                <Logo/>
              </div>
          </nav>
          
          <Home/>
          <Services/>
          <Team />
          <Location />
          {/* <Hours /> */}
          <Contact />
          <Gallery />
          <Footer/>
          <Background/>
      </main>
  );
}

export default App;
