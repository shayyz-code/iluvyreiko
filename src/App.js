import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalState from './pages/GlobalState';
import Layout from './pages/Layout';
import WelcomePage from './pages/welcome/pageWelcome';
import PropertiesPage from './pages/properties/pageProperties';
import GalleryPage from './pages/gallery/pageGallery';
import NotesPage from './pages/notes/pageNotes';
import MyDaysPage from './pages/mydays/pageMyDays.js';

function App() {
  return (
    <Router>
      <GlobalState>
        <Layout>
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route path="/properties">
              <PropertiesPage />
            </Route>
            <Route path="/gallery">
              <GalleryPage />
            </Route>
            <Route path="/days">
              <MyDaysPage />
            </Route>
          </Switch>
        </Layout>
      </GlobalState>
    </Router>
  );
}

export default App;
