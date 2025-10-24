import "./App.css";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import data from "./data/products.js";

function App() {
  return (
    <>
      <GroceriesAppContainer data={data} />
    </>
  );
}

export default App;
