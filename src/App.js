import './App.css';
import NavBar from './components/NavBar';
//import ItemListContainers from './containers/ItemListContainers';


function App() {
  return (
    <>
      
      <NavBar/>

      {/*<ItemListContainers greeting={"Nuestros productos mas destacados!"}/> */}

      <ItemDetailContainer/>

      <div className="App">
      
      </div>
    </>
  );
}

export default App;
