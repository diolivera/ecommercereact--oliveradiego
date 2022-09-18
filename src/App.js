import './App.css';
import NavBar from './components/NavBar';
//import ItemListContainers from './containers/ItemListContainers';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
      <NavBar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <div className="App"></div>

    </BrowserRouter>
  );
}

export default App;
