import styled from "styled-components";
import Dropdown from "./Components/Dropdown";
import Input from "./Components/Input";
import Slider from "./Components/Slider";
import Tab from "./Components/Tab";
import Toggle from "./Components/Toggle";

function App() {
  return (
    <AppWrapper>
      <Toggle items={TOGGLE_ITEMS} toggleWidth={TOGGLE_WIDTH} />
      <Tab items={TAB_ITEMS} tabWidth={TAB_WIDTH} />
      <Slider sections={SLIDER_SECTIONS} />
      <Input />
      <Dropdown items={DROPDOWN_ITEMS} defaultValue={DEFAULT_VALUE} />
    </AppWrapper>
  );
}

export default App;

const TOGGLE_ITEMS = [
  {
    id: "basic",
    name: "기본",
  },
  {
    id: "detail",
    name: "상세",
  },
];

const TOGGLE_WIDTH = 300;

const TAB_ITEMS = [
  {
    id: "POTATO",
    name: "감자",
  },
  {
    id: "SWEET_POTATO",
    name: "고구마",
  },
  {
    id: "CURRY_RICE",
    name: "카레라이스",
  },
];

const TAB_WIDTH = 390;

const DROPDOWN_ITEMS = [
  {
    id: "BTCUSD.PERP",
    name: "BTCUSD.PERP",
  },
  {
    id: "ETHUSD.PERP",
    name: "ETHUSD.PERP",
  },
  {
    id: "BCHUSD.PERP",
    name: "BCHUSD.PERP",
  },
  {
    id: "LTCUSD.PERP",
    name: "LTCUSD.PERP",
  },
  {
    id: "XRPUSD.PERP",
    name: "XRPUSD.PERP",
  },
  {
    id: "1000SHIBUSD.PERP",
    name: "1000SHIBUSD.PERP",
  },
];

const DEFAULT_VALUE = {
  id: "All Symbols",
  name: "All Symbols",
};

const SLIDER_SECTIONS = [1, 25, 50, 75, 100];

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
