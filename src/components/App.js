import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? 'App dark' : 'App light'

  function handleModeChange() {
    setIsDarkMode(isDarkMode => isDarkMode = !isDarkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Since the mode command is a button and not selector i made the text reflecting to the desired mode, not the current one */}
        <button onClick={handleModeChange}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>  
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
