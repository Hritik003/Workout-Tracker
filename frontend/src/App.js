import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BroswerRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
          </Routes>
        </div>
      
      
      
      </BroswerRouter>
    </div>
  );
}

export default App;
