import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/edit-creator/:id" element={<EditCreator />} />
        <Route path="/show-creators" element={<ShowCreators />} />
        <Route path="/view-creator/:id" element={<ViewCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
