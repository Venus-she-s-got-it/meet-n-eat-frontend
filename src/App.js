import { Routes, Route, Navigate } from 'react-router-dom'
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import LogInSignUp from './pages/LogInSignUp';
import MessageCenter from './pages/MessageCenter';
import MyProfile from './pages/MyProfile';
import NavBar from './components/NavBar';
import RestaurantDetail from './pages/RestaurantDetail';
import SearchResults from './pages/SearchResults';
import { createContext } from 'react';
import ProfileSettings from './pages/ProfileSettings';

export const UrlContext = createContext()

// Context variables
const url = 'http://localhost:8000'
const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <UrlContext.Provider value={{'url': url, 'defaultImage': defaultImage}}>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users/authentication/:option" element={<LogInSignUp />} />
            <Route path="/results/:searchString" element={<SearchResults />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/profile/settings" element={<ProfileSettings />} />
            <Route path="/restaurants/:restaurantId" element={<RestaurantDetail />} />
            <Route path="/message-center" element={<MessageCenter />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </UrlContext.Provider>
      </main>
    
    </div>
  );
}

export default App;
