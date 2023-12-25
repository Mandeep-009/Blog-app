import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blogs/:id' element={<Blog/>}/>
          <Route path='/blogs/create' element={<CreateBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
