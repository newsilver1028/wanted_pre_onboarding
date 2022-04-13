import Input from "./Components/Input";
import Tab from "./Components/Tab";
import Toggle from "./Components/Toggle";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App" id={styles.wrapper}>
      <Toggle />
      <Tab />
      <Input />
    </div>
  );
}

export default App;
