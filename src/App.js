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

export const UrlContext = createContext()

const url = 'http://localhost:8000'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/authentication" element={<LogInSignUp />} />
          <Route path="/results/:searchString" element={<SearchResults />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/restaurants/:restaurantId" element={<RestaurantDetail />} />
          <Route path="/message-center" element={<MessageCenter />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
    
    </div>
  );
}

export default App;
