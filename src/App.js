import Input from "./Components/Input";
import Tab from "./Components/Tab";
import Toggle from "./Components/Toggle";
import styles from "./App.module.css";
import Dropdown from "./Components/Dropdown";

function App() {
  return (
    <div className="App" id={styles.wrapper}>
      <Toggle />
      <Tab />
      <Input />
      <Dropdown />
    </div>
  );
}

export default App;
