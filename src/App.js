import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMeetupPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
