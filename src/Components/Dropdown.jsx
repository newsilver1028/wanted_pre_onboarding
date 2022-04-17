import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

library.add(faMagnifyingGlass);

export default function Dropdown({ items, defaultValue }) {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(defaultValue.name);
  const [toggle, setToggle] = useState(false);

  function handleInputText(e) {
    const inputValue = e.target.value;
    setValue(() => inputValue);
    setToggle(() => true);
  }

  function handleDropdownItemClick(items) {
    setSelected(() => items.name);
    setValue(() => "");
    setToggle(() => false);
  }

  return (
    <DropdownWrapper>
      <SelectedItemWrapper onClick={() => setToggle(true)}>
        <div className="selected-item">{selected}</div>
        <FontAwesomeIcon
          className="dropdown-icon"
          icon={faCaretDown}
          color="gray"
        />
      </SelectedItemWrapper>
      {toggle && (
        <ItemsWrapper>
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="lightgray" />
            <input
              type="text"
              className="input-text"
              onChange={handleInputText}
              value={value}
              placeholder="Search Symbol"
            />
          </div>
          <div className="list-wrapper">
            <div
              className="list-contents"
              items={defaultValue}
              onClick={() => handleDropdownItemClick(defaultValue)}
            >
              {defaultValue.name}
            </div>
            <ItemsList
              items={items}
              value={value}
              defaultValue={defaultValue}
              toggle={toggle}
              onClick={handleDropdownItemClick}
            />
          </div>
        </ItemsWrapper>
      )}
    </DropdownWrapper>
  );
}

const ItemsList = ({ items, value, toggle, onClick }) => {
  const filteredItems = items.filter((item) =>
    item.name.toString().toLowerCase().startsWith(value.toLowerCase())
  );
  if (filteredItems.length) {
    return (
      <div>
        {toggle &&
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="list-contents"
              onClick={() => onClick(item)}
            >
              {item.name}
            </div>
          ))}
      </div>
    );
  }
};

const DropdownWrapper = styled.div`
  position: relative;
  margin: 20px auto;
  width: 250px;
`;

const SelectedItemWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 260px;
  border: 1px solid darkgray;
  border-radius: 5px;
  .selected-item {
    padding: 12px 0px 0px 10px;
    height: 30px;
    color: gray;
    font-size: 1rem;
  }
  .dropdown-icon {
    margin: 10px;
  }
`;

const ItemsWrapper = styled.div`
  position: absolute;
  top: 50px;
  width: 260px;
  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 5px;
  z-index: 3;
  .input-wrapper {
    padding: 10px 0px 0px 10px;
    height: 30px;
    border-bottom: 1px solid darkgray;
  }

  .input-text {
    padding-left: 10px;
    border: none;
    color: gray;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: lightgrey;
    }
  }
  .list-wrapper {
    display: flex;
    flex-flow: column wrap;
  }
  .list-contents {
    padding: 10px 0px 10px 40px;
    color: gray;
    font-size: 1rem;
    &:hover {
      background-color: rgb(239, 236, 236);
    }
  }
`;
